import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { When } from 'react-if';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';
import { toast } from 'react-toastify';

import { UserService } from '../../../services/user.service';
import { RootState } from '../../../store';
import { PaginatorFactory } from '../../../factory';
import { UserTypes } from '../../../types';
import Loading from '../../loading';
import NoData from '../../no-data';
import { USER_COLUMNS } from '../../../builders';
import { AreYouSureModal } from '../..';

export const UserList: React.FC = () => {
    const navigate = useNavigate();
    const { pagination: { total, items }, loading } = useSelector((state: RootState) => state.user);
    const [userToDelete, setUserToDelete] = useState<UserTypes.Model>({} as UserTypes.Model);

    const [deleteModal, setDeleteModal] = useState(false);

    const [pagination, setPagination] = useState<PaginatorFactory<Omit<UserTypes.Model, 'id'>>>({
      page: 0,
      perPage: 15,
    });
  
    const onDelete = async () => {
        await UserService.destroy(
            userToDelete?.id,
            (err, msg) => {
                setDeleteModal(false);
                setUserToDelete({} as UserTypes.Model);

                if (err) {
                    toast(
                        msg, 
                        {
                            autoClose: 1500,
                            type: 'error',
                        }
                    )
                    return;
                } 

                toast(
                    msg, 
                    {
                        autoClose: 1500,
                        type: 'success',
                    }
                );
            }
        );
    }

    useEffect(() => {
      UserService.fetchMany({ ...pagination, page: pagination.page + 1 });
    }, [pagination?.perPage, pagination?.page]);

    return (
        <>
            <When condition={loading?.fetchMany}>
                <Loading />
            </When>

            <When condition={loading?.fetchMany !== true && items?.length < 1}>
                <NoData 
                    buttonText='Adicionar'
                    onClick={() => navigate('/app/user/new')}
                    title={'Nenhum dado foi encontrado.'}
                    description={'Aparentemente, você não cadastrou nenhum item nessa entidade.'}
                />
            </When>

            <When condition={!loading.fetchMany && items?.length > 0}>
                <Card>
                    <DataGrid<UserTypes.Model>
                        columns={[
                            ...USER_COLUMNS,
                            {
                                field: 'createdAt',
                                headerName: 'Data de criação',
                                valueGetter: ({ row: { createdAt }}) => `${dayjs(createdAt).format('DD/MM/YYYY HH:MM')}`,
                                width: 250,
                            },
                            {
                                field: 'updatedAt',
                                headerName: 'Última atualização',
                                valueGetter: ({ row: { updatedAt }}) => `${dayjs(updatedAt).format('DD/MM/YYYY HH:MM')}`,
                                width: 250,
                            },
                            {
                                headerName: 'Ações',
                                type: 'actions',
                                field: 'actions',
                                getActions: ({ row }) =>  [
                                    <GridActionsCellItem 
                                        label='Editar' 
                                        icon={<EditIcon />} 
                                        onClick={() => navigate(`/app/user/${row?.id}/update`)}
                                    />,
                                    <GridActionsCellItem 
                                        label='Deletar' 
                                        icon={<DeleteIcon />} 
                                        onClick={() => {
                                            setUserToDelete(row);
                                            setDeleteModal(true);
                                        }} 
                                    />,
                                ],
                            },
                        ]}
                        rows={items || []}
                        page={pagination?.page}
                        pageSize={pagination?.perPage}
                        disableSelectionOnClick={true}
                        rowsPerPageOptions={[5, 15, 25, 50]}
                        pagination={true}
                        autoHeight={true}
                        onPageChange={(p) => setPagination(pag => ({ ...pag, page: p }))}
                        onPageSizeChange={(p) => setPagination(pag => ({ ...pag, perPage: p }))}
                        paginationMode='server'
                        loading={loading?.fetchMany}
                        rowCount={total}
                        disableColumnSelector={true}
                        disableColumnMenu={true}
                    />
                </Card>
            </When>

            <AreYouSureModal 
                title={'Tem certeza que deseja excluir esse item?'}
                description={'Você perderá esse registro permanentemente.'}
                onHide={() => {
                    setUserToDelete({} as UserTypes.Model);
                    setDeleteModal(false);
                }}
                loading={loading?.destroy}
                onConfirm={onDelete}
                visible={deleteModal}
            />
        </>
    )
}