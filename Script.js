function Open(waar) {
    if (waar === "") {
        window.location.href = `./`;
    } else {
        window.location.href = `./${waar}.html`;
    }
}
window.onload = function () {
    // document.getElementById("Test").src = getURL(Film[1]);
};
const Film = [
    {
        id: 1,
        name: "Beautiful boy",
        src: "y23HyopQxEg",
        description: "",
        date: "",
    },
    {
        id: 2,
        name: "Sweet bean",
        src: "KcwKPRfTMa4",
        description: "",
        date: "",
    },
    { id: 3, name: "Capernaum", src: "ULUo0048xZE", description: "", date: "" },
    { id: 4, name: "Greenbook", src: "QkZxoko_HC0", description: "", date: "" },
    {
        id: 5,
        name: "The children act",
        src: "kKQkUcJioxU",
        description: "",
        date: "",
    },
    { id: 6, name: "Roma", src: "6BS27ngZtxg", description: "", date: "" },
    {
        id: 7,
        name: "The Father",
        src: "4TZb7YfK-JI",
        description: "",
        date: "",
    },
    {
        id: 8,
        name: " Supernova",
        src: "bRz2hY6ykGE",
        description: "",
        date: "",
    },
    { id: 9, name: "Nomadland", src: "6sxCFZ8_d84", description: "", date: "" },
    { id: 10, name: "Living", src: "OVo5kLt_-BU", description: "", date: "" },
    { id: 11, name: "Close", src: "6EJGnU2AmV4", description: "", date: "" },
    {
        id: 12,
        name: "Zee van tijd",
        src: "DvlC6xfCKv8",
        description: "",
        date: "",
    },
    {
        id: 13,
        name: "One Life",
        src: "1EVPjV7Toho",
        date: "(vrijdag 7 februari om 14:00)",
        description:
            "De film vertelt het waargebeurde verhaal van Sir Nicholas Winton, die tijdens de Tweede Wereldoorlog honderden Joodse kinderen uit Tsjechoslowakije redde van de Holocaust. Het drama volgt zijn moedige inspanningen, morele dilemma's en de blijvende impact van zijn acties, die pas vele jaren later volledig erkend werden.",
    },
    {
        id: 14,
        name: "The Quiet Girl",
        src: "LGWyqty2m-A",
        date: "(vrijdag 7 februari om 19:30)",
        description:
            "We volgen Cait, een verwaarloosd Iers meisje dat tijdens de zomer bij pleegfamilieleden verblijft. In hun liefdevolle zorg bloeit ze op, maar lang verborgen familiegeheimen dreigen alles te veranderen. Het verhaal verkent thema's van stilte, trauma en de kracht van menselijke relaties in een complexe wereld.",
    },
    {
        id: 15,
        name: "Shoplifters",
        src: "9382rwoMiRc",
        date: "(zaterdag 8 februari om 19:30)",
        description:
            "Een arm Japans gezin leeft van diefstal en kleine criminaliteit. Wanneer ze een verwaarloosd meisje opnemen, groeit hun band, maar geheimen komen aan het licht. Dit confronteert hen met de ware aard van hun relaties en de prijs van hun keuzes, met emotionele en juridische gevolgen.",
    },
    {
        id: 16,
        name: "Letters To God",
        src: "5kAeSI_BUgc",
        date: "(vrijdag 7 februari om 10:00)",
        description:
            "Een film waarin de 8-jarige Tyler Doherty worstelt met zijn ziekte en zijn omgeving. Hij schrijft daarom brieven over hoop, geloof en angst. Een even mooi als aangrijpend verhaal voor alle leeftijden",
    },
    { id: 17, name: "", src: "", date: "", description: "" },
];
function getURL(id) {
    return "https://youtube.com/embed/" + id.src;
}
