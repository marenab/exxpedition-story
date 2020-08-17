var config = {
    style: 'mapbox://styles/mapbox-community/ckdxtte0l4f8b19rvj3047m15',
    accessToken: 'pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2R4dHZsY2UwdzcyMnBvYThseHdvbHFqIn0.jr_YXfpkTGgB1BkNff6Wyw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '3 YEARS. 31 VOYAGES. 300 WOMEN.',
    subtitle: 'eXXpedition Round the World is an all-female sailing voyage and research mission. On board S.V. TravelEdge, eXXpedition crews will explore plastics and toxics in our ocean, via four of the five oceanic gyres and the Arctic.',
    byline: 'By Marena Brinkhurst',
    footer: 'Source: eXXpedition, plastics data from Lebreton et al. 2014.',
    chapters: [
        {
            id: 'route',
            title: 'Around the world',
            image: './images/eXXpedition-logo.png',
            description: 'eXXpedition Round The World will travel over 38,000 nautical miles and 30 voyage legs starting and ending in the United Kingdom. Connected by a passion to protect our shared ocean, it will enable 300 women to go to sea as hands-on crew and experience first hand the challenges we face from single-use plastics while contributing to cutting-edge scientific research and solutions-based thinking.',
            location: {
                center: [-90.03584, 21.56927],
                zoom: 1.73,
                pitch: 2.00,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'plastics',
            title: 'A sea of plastic',
            image: '',
            description: 'Microplastics are present throughout our oceans, but they are expected to converge in areas of swirling currents called gyres.',
            location: {
                center: [-90.03584, 21.56927],
                zoom: 1.73,
                pitch: 2.00,
                bearing: 0
            },
            onChapterEnter: [
                {layer: 'plastic',
                opacity: 1}
            ],
            onChapterExit: [{layer: 'plastic', opacity: 0}]
        },
        {
            id: 'start',
            title: 'Setting sail',
            image: './images/eXXpedition_Jen Russell.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-4.98700, 50.24418],
                zoom: 7.3,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
