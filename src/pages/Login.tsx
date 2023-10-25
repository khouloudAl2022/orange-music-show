import Button from "../components/Button/Button"
import Input from "../components/Input/Input"

const Login = () => {
    return (
        <section className="flex min-h-full w-full">
            <div className="flex flex-col">
                <h3 className="font-bold ">Connectez-vous</h3>
                <p>Bienvenue de retour</p>
                <form>
                    <div>
                        <Input placeholder="+21650555555" label="Numéro de téléphone" id="phone_number" name="phone_number" type="phone" />
                    </div>
                    <Button className="w-full bg-primary mt-4 h-[50px] rounded-lg text-white" text="Se connecter" type="button" />
                </form>
                <p>
                    Vous n’avez pas de compte?
                    <span><a>Inscrivez-vous</a></span>
                </p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </section>
    )
}

export default Login
