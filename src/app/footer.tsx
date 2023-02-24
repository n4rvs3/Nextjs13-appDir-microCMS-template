import { copyright } from "@/components/siteSetting"

export const Footer = () => {

        return (
                <footer>
                        <div className="flex justify-center py-4 mt-5">
                                <span>{copyright}</span>
                        </div>
                </footer>
        )
}