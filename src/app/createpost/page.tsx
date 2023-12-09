import Title from "@/components/Title";
import Form from "@/components/Form";

export default () => {
    return (
        <div>
            <div className="pb-8">
                <Title size="large"> CRIE UM POST! </Title>
            </div>
            <div>
                <Form/>
            </div>
        </div>
    )
}