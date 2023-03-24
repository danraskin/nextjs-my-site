import { delay } from "@/lib/delay";
import HeaderLink from "./HeaderLink";

export default async function Header() {
    await delay(5000)
    return(
        <header>
            logo
            <div>
                <HeaderLink />
            </div>
        </header>
    )
}