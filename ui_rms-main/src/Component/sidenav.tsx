import styled from "styled-components";
import uiLogo from "../assets/uilogo.svg";
import Home from "../assets/Home.svg";
import Result from "../assets/Result.svg";
import Shape from "../assets/Shape.svg";
// import Navigate from "../assets/hamburger.svg";


const SideNav = styled.div`
    width: 250px;
    height: 100vh;
    background-color: #2856C3;
    padding: 30px 10px;
`

const Container = styled.div`
    width: 200px;
    height: 10vh;
    padding: 30px 0px;
    div:hover {
    background-color: #E4F1FF;
    border-raduis: 0px 8px 8px 0px;
    width: 45vh;
    }
`
const Image = styled.img`
    padding: 30px 0px;
    margin: 0px 40px;
    width: 60px;
    height: 40px;

`



const SideNavPage = () => {
    return (
        <SideNav>
            <div style={{
                color: "white",
                margin: "20px 0px",
            }}>
                {/* <Image src={Navigate} alt="hamburger" /> */}

            </div>
            <Image src={uiLogo} alt="logo" />

            <Container>
                <>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Image src={Home} alt="icon" />
                        <span>HOME</span>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "25px",
                        margin: "50px 0px"
                    }}>
                        <Image src={Result} alt="mus" />
                        <span>RESULTS</span>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "25px",
                        margin: "50px 0px"
                    }}>
                        <Image src={Shape} alt="baam" />
                        <span>COURSES</span>
                    </div>
                </>
            </Container>
                

        </SideNav>
    )
}


export default SideNavPage;