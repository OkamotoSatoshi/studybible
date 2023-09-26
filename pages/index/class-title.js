import styled from "@emotion/styled";
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Image from "next/image";


const TypographyHeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '1.25rem',
    lineHeight: 'normal',
    letterSpacing: '5.51px',
    textTransform: 'uppercase',
    // color: theme.palette.text.disabled,
    // fontWeight: theme.typography.fontWeightMedium
}))


export default function ClassTitle({type,icon,id}){
    return (<div className="container">
      <Divider 
        textAlign='left'
        sx={{
          m: 1,
          p:1,
          width: '90%',
          lineHeight: 'normal',
          textTransform: 'uppercase',
          '&:before, &:after': { top: 24, transform: 'none' },
          '& .MuiDivider-wrapper': { px: 2.5, fontSize: '0.75rem', letterSpacing: '0.21px' }
        }}
      >
        <TypographyHeaderText id={`${id}`}>
          <Image height={48} width={48} className="mr-3" src={`/assets/classes/${icon}`} alt=""/>
          {type}
        </TypographyHeaderText>
      </Divider>
  </div>)
}