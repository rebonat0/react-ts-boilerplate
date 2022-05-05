import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { When } from 'react-if';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import { DataGrid } from '@mui/x-data-grid';

import { UserService } from '../../../services/user.service';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ListColumnsFactory, PaginatorFactory } from '../../../factory';
import { UserTypes } from '../../../types';
import Loading from '../../loading';
import NoData from '../../no-data';
import { Card } from '@mui/material';

export const UserList: React.FC = () => {
    const navigate = useNavigate();
    const { pagination: { total, items }, loading } = useSelector((state: RootState) => state.user);

    const [pagination, setPagination] = useState<PaginatorFactory<Omit<UserTypes.Model, 'id'>>>({
      page: 0,
      perPage: 15,
    });
  
    useEffect(() => {
      UserService.fetchMany({ ...pagination, page: pagination.page + 1 });
    }, [pagination?.perPage, pagination?.page])

    return (
        <>
            <When condition={loading?.fetchMany}>
                <Loading />
            </When>

            <When condition={!loading?.fetchMany && total === 0}>
                <NoData 
                    buttonText='new user'
                    onClick={() => navigate('/app/user/new')}
                    title={'No data found.'}
                    description={'Theres no created user to show.'}
                />
            </When>

            <When condition={!loading.fetchMany && total > 0}>
                <Card style={{ width: '100%' }}>
                    <DataGrid<UserTypes.Model> 
                        columns={[
                            ...new ListColumnsFactory<UserTypes.Model>(items[0]).generate(),
                            {
                                headerName: 'actions',
                                width: 200,
                                type: 'actions',
                                field: 'actions',
                                getActions: ({ row: { id }}) =>  [
                                    <GridActionsCellItem 
                                        label='Editar' 
                                        icon={<EditIcon />} 
                                        onClick={() => navigate(`/app/user/${id}/update`)}
                                    />,
                                    <GridActionsCellItem 
                                        label='Deletar' 
                                        icon={<DeleteIcon />} 
                                        onClick={() => {
                                        }} 
                                    />,
                                ],
                            }
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
        </>
    )
}