const apiUrl = '/api/bike';

export const getBikes = () => {
    return fetch(apiUrl).then((res) => {
        if (res.ok)
        {
            return res.json();
        } else {
            throw new Error(
                "An unknown error occurred while trying to get inventory.",
              );
        }
    })
}


export const getBikeById = (id) => {
    return fetch(`${apiUrl}/${id}`).then((res) => {
        if (res.ok)
        {
            return res.json();
        } else {
            throw new Error(
                "An unknown error occurred while trying to get inventory.",
              );
        }
    })
}

export const getBikesInShopCount = () => {
    return fetch(`${apiUrl}/count`).then((res) => {
        if (res.ok)
        {
            return res.json();
        } else {
            throw new Error(
                "An unknown error occurred while trying to get inventory.",
              );
        }
    })
}