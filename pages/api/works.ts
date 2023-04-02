import {NextApiRequest, NextApiResponse} from "next";
import libxmljs from "libxmljs";
import * as fs from "fs";

const localStore = [
    {
        title: "Containr GUI",
        img: "/works/work1/image.png",
        description: "An ultimate Minecraft GUI framework. This project is part of my public freelance repositories I use in my commissions.",
        categories: ["Java", "Minecraft", "Library"],
    },
]

function loadWorks() {
    return localStore;
    /*return fs.readdirSync("public/works")
        .map(file => {
            const meta = fs.readFileSync(`public/works/${file}/meta.xml`, "utf-8");
            const root = libxmljs.parseXml(meta).root();
            const title = (root?.find("title") as any)[0].text();
            const img = `/works/${file}/` + (root?.find("image") as any)[0].text();
            const description = (root?.find("description") as any)[0].text();
            const categories = root?.find("//category").map((c: any) => c.text());
            return {title, img, description, categories};
        });*/
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method?.toUpperCase() !== "POST")
        return res.status(405).end();

    const {query, filters} = req.body as {query: string, filters: string[]};
    const works = loadWorks()
        .filter(work => {
            return (work.title.includes(query) || work.description.includes(query)) && filters.every(f => (work.categories as any).includes(f));
        });

    return res.status(200).json(works);
}

export {
    loadWorks,
}
