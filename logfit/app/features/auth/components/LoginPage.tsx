import Button from "../../../shared/components/Button";
import { Card } from "../../../shared/components/Card";
import { Input } from "../../../shared/components/Input";

export default function LoginForm() {
    return (
        <Card>
            <Input
                placeholder="E-mail"
            />

            <Input
                placeholder="Senha"
                type="password"
            />

            <Button className="mt-6">
                Entrar
            </Button>
        </Card>
    );
}