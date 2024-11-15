import styled from "styled-components";

export const HomeContent = styled.div({
  display: "flex",
  position: "relative",
  alignItems: "flex-start",
  justifyContent: "flex-end",
});

export const HomeBackGround = styled.img({
  height: "100vh",
  marginLeft: "-20rem",
  position: "absolute",
  left: 0,
});


export const DivContent = styled.div({
  width: "auto",
  color: "white",
  marginRight: "10px",
  marginTop: "10px",
});

export const Input = styled.input({
  width: "80%",
  minWidth: "250px",
  border: "1px solid #999999",
  borderRadius: "12px",
  background: "transparent",
  fontSize: "18px",
  padding: "10px",
  marginRight: "12px",
  color: "white",
});

export const ButaoDeBusca = styled.button({
  minWidth: "250px",
  border: "1px solid #999999",
  borderRadius: "12px",
  background: "#203338",
  fontSize: "18px",
  padding: "10px",
  marginRight: "12px",
  color: "white",
});

export const ProfileInfo = styled.div({
  color: "white",
  width: "100%",
  margin: '40px 0',
  display: "flex",
});

export const ProfileImage = styled.img({
  width: "120px",
  height: "120px",
  padding: "10px",
  border: "2px solid white",
  borderRadius: "100px",
  marginRight: '20px'
});

export const Perfil = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "2px",
  marginTop:'20px'
});

export const Nome = styled.h3({
    fontSize:'21px',
    color: ' #999999',
    marginBottom: '5px'

})

export const Arroba = styled.span({
    display: "block",
    fontSize: '16px',
    color: '#999999',
    marginBottom:'15px'
})

export const Descrição = styled.p({
    fontSize: '16px',
    color: '#999999'
})

export const RepoDiv = styled.div ({
    margin: '20px 0'

})

export const Title = styled.h4 ({
    fontSize: '32px',
    textAlign: 'center'

})