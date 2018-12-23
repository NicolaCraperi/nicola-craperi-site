module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                title: "HELLO",
                name: "Nicola Craperi | DEV",
                short_name: "ncraperi",
                start_url: "/",
                icon: "static/favicon/NC.png"
            }
        },
        `gatsby-plugin-offline`
    ]
};
