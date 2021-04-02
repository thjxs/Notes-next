interface PageItem {
    name: string;
    path: string
}

interface TOC {
    [key: string]: {
        name: string;
        path: string;
        children: {
            [key: string]: string
        }
    }
}

