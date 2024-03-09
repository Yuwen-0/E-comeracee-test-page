async function filterBy(url: string | URL | Request,category: any,name: any){
    const products = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({category,name})
    }).then((res) => res.json());
    return products
}