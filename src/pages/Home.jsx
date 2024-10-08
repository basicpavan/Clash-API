import React from "react";

function get_Player() {
    const [data, setData] = useState();
    const [value, setValue] = useState();
    const [loading, setLoading] = useState(false);
    const [showPlayer, setShowPlayer] = React.useState(false);

}
const fetchDataPlayer = async () => {
    if (value) {
        try {
            setLoading(true);
            await axios.get(`/api1/users/profiles/minecraft/${value}`)
                .then(async (res) => {
                    console.log("type of res: ", typeof (res))
                    await axios.get(`/api2/session/minecraft/profile/${res.data.id}`)
                        .then((resChild) => {
                            setData(JSON.parse(atob(resChild.data.properties[0].value)));
                        })
                    console.log(data)
                })
                
        } catch (error) {
            console.log(`Error no home.jsx/fetchData`, error);
        } finally {
            setLoading(false);
        }
    }
};