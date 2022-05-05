import { Box, Button, Typography } from "@mui/material";
import React, { memo } from "react";
import { motion } from 'framer-motion';

import { MotionContainer, varBounceIn } from "../animate";
import { When } from "react-if";

interface Props {
    title: string,
    description: string,
    buttonText: string | null,
    onClick(): void,
};

const NoData: React.FC<Props> = ({
    title,
    description,
    buttonText,
    onClick,
}) => {
    return (
        <MotionContainer open>
            <Box alignSelf={'center'} sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', mt: '10%', mb: '5%' }}>
                <motion.div variants={varBounceIn}>
                    <Typography variant="h4" paragraph>
                        {title}
                    </Typography>
                </motion.div>
                <Typography sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>

                <When condition={buttonText && buttonText?.length > 0}>
                    <Button onClick={onClick} sx={{ mt: 3 }} size="medium" variant="contained">
                        {buttonText}
                    </Button>
                </When>
               
            </Box>
        </MotionContainer>
    )
}

export default memo(NoData);