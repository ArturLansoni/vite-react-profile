import { ThreeDots } from "react-loader-spinner"
import { LoaderContainer } from "./styles"

function Loader() {
    return (
        <LoaderContainer>
            <h3>Carregando</h3>
            <ThreeDots
                visible={true}
                height="40"
                width="40"
                color="white"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </LoaderContainer>
    )
}

export { Loader }