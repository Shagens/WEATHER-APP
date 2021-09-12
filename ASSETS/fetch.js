class fetch {
    async getCurrent(input){
    const myKey = "e31577bbe7b7488daef213652211209";

        const response = await fetch(
            "https://www.weatherapi.com/my/?q=${input}&appid=${e31577bbe7b7488daef213652211209}"

        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}

