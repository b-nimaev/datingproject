export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {

        const query = await $fetch('https://drvcash.com/backendapi/organization/isINNExists', {
            method: 'get',
            params: {
                inn: body.inn
            },
            headers: {
                authorization: body.authentication,
            }
        })

        return query

    } catch (error) {

        return error

    }

})
