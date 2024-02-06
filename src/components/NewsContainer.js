import React, { Component } from 'react'
import News from './News'

export class NewsContainer extends Component {
  articles=[
    {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Nishant Kumar",
      "title": "Adani-Hindenburg Case Verdict: Adani Ent, Adani Power, Adani Ports rally 3-18% as Supreme Court passes verdict | Mint - Mint",
      "description": "Adani Group stocks surged in intraday trade on Wednesday, January 3, after the Supreme Court's verdict on petitions seeking an investigation into fraud allegations against Adani Group companies, as outlined in the Hindenburg Research report.",
      "url": "https://www.livemint.com/market/stock-market-news/adanihindenburg-verdict-group-stocks-in-focus-ahead-of-supreme-court-order-11704250643401.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/03/1600x900/stocktraders-kNDB--621x414LiveMint_1704250952993_1704250953204.jpg",
      "publishedAt": "2024-01-03T06:22:26Z",
      "content": "Adani Group stocks surged to the tune of 3 per cent to 18 per cent in intraday trade on Wednesday, January 3, shooting up the overall market capitalisation of the group over 15 lakh crore, after the … [+3955 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "Garena Free Fire MAX Redeem Codes for January 3: Booyah Pass rewards are LIVE! - HT Tech",
      "description": "Garena Free Fire MAX Redeem Codes for January 3: The new Booyah Pass for the month of January is finally live in Garena Free Fire MAX. Also check out Garena Free Fire MAX redeem codes to get your hands on free items.",
      "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-january-3-booyah-pass-rewards-are-live-71704262147570.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2024/01/03/1600x900/14ba3020f1a1bf8de2142925bda064d2_1686444978428_1704262211902.jpg",
      "publishedAt": "2024-01-03T06:10:41Z",
      "content": "Garena Free Fire MAX Redeem Codes for January 3: 2024 has now kicked off with amazing rewards offered as part of the Garena Free Fire MAX Booyah Pass! The Booyah Pass for the month of January is now … [+3165 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Weather Channel"
      },
      "author": "The Weather Channel",
      "title": "Authorities Identify Anxiety and Sleep Trouble as Symptoms of JN.1 COVID-19 Variant | Weather.com - The Weather Channel",
      "description": "As per the WHO, the global number of new COVID-19 cases has increased by 52 per cent during the last one month.",
      "url": "https://weather.com/en-IN/india/coronavirus/news/2024-01-03-authorities-identify-anxiety-and-sleep-trouble-as-symptoms-of-jn1",
      "urlToImage": "https://s.w-x.co/in-covid%20beds.jpg",
      "publishedAt": "2024-01-03T06:10:40Z",
      "content": "Health authorities in the UK have identified anxiety and sleeping trouble as new symptoms of the latest COVID-19 sub-variant JN.1, according to a report.\r\nJN.1, from the lineage of Omicron, was first… [+3008 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Scroll.in"
      },
      "author": "Scroll Staff",
      "title": "Watch: European Space Agency posts timelapse video of Earth on the first day of 2024 - Scroll.in",
      "description": "The footage was captured by astronaut Andreas Mogensen.",
      "url": "https://scroll.in/video/1061494/watch-european-space-agency-posts-timelapse-video-of-earth-on-the-first-day-of-2024",
      "urlToImage": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/197150-fldaheovjn-1704195748.jpeg",
      "publishedAt": "2024-01-03T05:55:00Z",
      "content": "What is in store for your 2024?\r\nFrom the International Space Station and all of us here at Johnson Space Center, we wish you a Happy New Year! pic.twitter.com/xY2q4LseWM\r\n— NASA's Johnson Space Cent… [+33 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "Indian-origin family's death mystery solved in US - Hindustan Times",
      "description": "Police confirm Indian-origin family's death in their Dover mansion in Massachusetts, US was a murder-suicide",
      "url": "https://www.hindustantimes.com/world-news/us-news/indian-familys-death-mystery-solved-in-us-101704258193926.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/03/1600x900/indian_origin_couple_dead_1703920975885_1704260916313.jpg",
      "publishedAt": "2024-01-03T05:53:12Z",
      "content": "Three days after three members of an Indian-origin family were found dead in their Dover mansion in Massachusetts, US their death mystery has been solved. \r\nIndian couple found dead in their Dover ma… [+3030 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Covid cases in India Live Updates: India logs 602 new cases, 5 deaths in the last 24 hours | Mint - Mint",
      "description": "Covid cases in India Live Updates: As India reported 312 cases of Covid sub-variant JN.1, Union Health Minister Mansukh Mandaviya called fore pandemic preparedness and disease surveillance in the country. Catch LIVE updates here",
      "url": "https://www.livemint.com/news/covid-cases-in-india-live-updates-india-reports-636-fresh-covid-cases-in-a-day-highest-in-227-days-11704156163858.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/02/1600x900/PTI01-01-2024-000113B-0_1704205307182_1704205325251.jpg",
      "publishedAt": "2024-01-03T04:58:54Z",
      "content": "Covid cases in India Live Updates: COVID-19 cases have been steadily rising in India since the last month when the number of cases spiked especially in Kerala. With the emergence of Omicron sub-varia… [+28914 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "Alok KN Mishra",
      "title": "Kejriwal again declines to appear for questioning in Delhi excise policy case - Hindustan Times",
      "description": "Delhi chief minister Arvind Kejriwal ignored two previous summons on November 2 and on December 22, calling them “illegal and politically motivated” | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/kejriwal-again-declines-to-appear-for-questioning-in-delhi-excise-policy-case-101704255639813.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/03/1600x900/Delhi-chief-minister-Arvind-Kejriwal---HT-PHOTO-_1704258394462.jpg",
      "publishedAt": "2024-01-03T04:20:39Z",
      "content": "Delhi chief minister Arvind Kejriwal has declined to appear for questioning for a third time in the money laundering case linked to alleged irregularities in the Delhi excise policy 2021-22 while ple… [+5299 chars]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TOI Sports Desk",
      "title": "'T20 cricket, who cares?': Wasim Akram, Waqar Younis criticize decision to rest Shaheen Afridi for Sydney - Times of India",
      "description": "Cricket News: Former Pakistan pace greats Wasim Akram and Waqar Younis have criticised the decision to rest fast bowler Shaheen Shah Afridi in the third and final T",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/news/t20-cricket-who-cares-wasim-akram-waqar-younis-criticize-decision-to-rest-shaheen-afridi-for-sydney-test/articleshow/106501570.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-106501656,width-1070,height-580,imgsize-34110,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-01-03T04:16:05Z",
      "content": "Wisden picks 2023 mens ODI team of the year, includes 7 Indians in the XI"
  },
  {
      "source": {
          "id": null,
          "name": "Gadgets360.com"
      },
      "author": "Nithya P Nair, Siddharth Suvarna",
      "title": "Samsung Galaxy Unpacked 2024 Set for January 17, Galaxy S24 Series Expected; Pre-Reservations Begin in In... - Gadgets 360",
      "description": "Samsung will host its first Galaxy Unpacked 2024 event on January 17, the South Korean tech giant confirmed on Wednesday. This is an in-person event and it will take place at the SAP Center in San Jose, but will also be live streamed across Samsung's official…",
      "url": "https://www.gadgets360.com/mobiles/news/samsung-s24-plus-ultra-launch-date-january-17-galaxy-unpacked-event-pre-reservations-india-4790687",
      "urlToImage": "https://i.gadgets360cdn.com/large/galaxy_unpacked_samsung_1704255165538.jpg",
      "publishedAt": "2024-01-03T04:04:58Z",
      "content": "Samsung will host its first Galaxy Unpacked event in 2024 on January 17, the South Korean tech giant confirmed on Wednesday. This will be an in-person event and take place at the SAP Center in San Jo… [+2445 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Aamir, Kiran Rao and family spotted at Salman's home ahead of Ira Khan wedding - Hindustan Times",
      "description": "Aamir Khan's family attended Ira Khan's pre-wedding celebration at Salman Khan's home in Mumbai on Tuesday. Ira will marry Nupur Shikhare today.  | Bollywood",
      "url": "https://www.hindustantimes.com/entertainment/bollywood/aamir-khan-kiran-rao-ira-khan-wedding-nupur-shikhare-salman-khan-home-101704253548684.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/03/1600x900/ira_khan_wedding_salman_khan_1704254041221_1704254065724.jpg",
      "publishedAt": "2024-01-03T04:01:39Z",
      "content": "Hours after Aamir Khan's first wife Reena Dutta and ex-wife Kiran Rao were spotted arriving for Ira Khan's haldi ceremony in Mumbai on Tuesday, the whole family turned up for a pre-wedding celebratio… [+2241 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT Correspondent",
      "title": "As Chandigarh records highest cases of TB in country, GMCH to start with MD course - Hindustan Times",
      "description": "The health ministry has given the green light for four new faculty positions in the tuberculosis and respiratory diseases department at GMCH in Chandigarh",
      "url": "https://www.hindustantimes.com/cities/chandigarh-news/after-chandigarh-records-highest-tb-cases-gmch-takes-initiative-with-md-course-101704222324021.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/02/1600x900/The-TBRD-department--currently-based-at-the-Sector_1704224182623.jpg",
      "publishedAt": "2024-01-03T03:52:10Z",
      "content": "The city has earned the unfortunate distinction of having the highest tuberculosis (TB) rate in the country for the year 2023, reporting a staggering 475 cases per 100,000 people. Responding to this … [+2033 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Perihelion Day 2024: When Earth Reaches Its Nearest Point To The Sun - NDTV",
      "description": "Perihelion Day signifies the moment when Earth is at its closest point to the Sun during its yearly orbit.",
      "url": "https://www.ndtv.com/science/perihelion-day-2024-when-earth-reaches-its-nearest-point-to-the-sun-4790775",
      "urlToImage": "https://c.ndtvimg.com/2024-01/fetoora_sun-_625x300_03_January_24.jpeg?ver-20231203.06",
      "publishedAt": "2024-01-03T03:42:20Z",
      "content": "This occurrence is a result of Earth following an elliptical path around the Sun.\r\nToday, January 3rd, is Perihelion Day, a special day for everyone on Earth. It's when our planet is closest to the s… [+1399 chars]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Hamas's deputy chief Al-Arouri killed in Israeli strike in Beirut - Times of India",
      "description": "Israel's conflict with Palestinian militants expanded to Beirut, Lebanon, on January 02. A targeted Israeli strike in the Lebanese capital killed Saleh al-Aruri, Hamas's deputy leader, according to group and security officials. Israel launched the st",
      "url": "https://timesofindia.indiatimes.com/videos/toi-original/hamass-deputy-chief-al-arouri-killed-in-israeli-strike-in-beirut/videoshow/106500904.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-106500904,imgsize-49642.cms",
      "publishedAt": "2024-01-03T03:41:39Z",
      "content": "Jan 03, 2024, 09:11AM ISTSource: TOI.inIsrael's conflict with Palestinian militants expanded to Beirut, Lebanon, on January 02. A targeted Israeli strike in the Lebanese capital killed Saleh al-Aruri… [+688 chars]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TNN",
      "title": "57-year-old man dies of swine flu - Times of India",
      "description": "Vadodara: A 57-year-old man from the city succumbed to swine flu at state-run SSG Hospital.",
      "url": "https://timesofindia.indiatimes.com/city/vadodara/57-year-old-man-dies-of-swine-flu/articleshow/106500449.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-47529300,width-1070,height-580,imgsize-110164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-01-03T03:23:51Z",
      "content": "Animals who eat their own babies"
  },
  {
      "source": {
          "id": null,
          "name": "ThePrint"
      },
      "author": "Sandhya Ramesh",
      "title": "All about Square Kilometre Array, world’s largest radio telescope project, and India’s contribution - ThePrint",
      "description": "While first phase of construction SKA1 began in December 2022, it is expected to begin operations by 2029. This week, Union Cabinet approved India's monetary contribution to project.",
      "url": "https://theprint.in/science/all-about-square-kilometre-array-worlds-largest-radio-telescope-project-and-indias-contribution/1908390/",
      "urlToImage": "https://static.theprint.in/wp-content/uploads/2024/01/Untitled-design-2024-01-02T210331.000.png",
      "publishedAt": "2024-01-03T02:39:27Z",
      "content": "Survey data from SKA observation will provide deep insights into the early days of evolution of our galaxy, and the telescope will also search for signs of life elsewhere outside the Earth.\r\nThe SKA … [+5127 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Business Standard"
      },
      "author": "Nikita Vashisht",
      "title": "Stocks to Watch today, Jan 3: Adani, PNB, YES Bank, MOIL, Shyam Metalics - Business Standard",
      "description": "Stocks to Watch on Wednesday, January 3, 2024: The Supreme Court is expected to announce its verdict in the Adani-Hindenburg case later on Wednesday",
      "url": "https://www.business-standard.com/markets/news/stocks-to-watch-today-jan-3-adani-pnb-yes-bank-moil-shyam-metalics-124010300101_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/20/full/1621495317-7899.jpg",
      "publishedAt": "2024-01-03T02:36:06Z",
      "content": "Stocks to Watch on Wednesday, January 3, 2024: The Supreme Court is expected to announce its verdict in the Adani-Hindenburg case later on Wednesday\r\nNikita VashishtNew Delhi\r\nStocks to Watch on Janu… [+4046 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Truckers End Stir After Centre Says 'Hit-And-Run Law Decision After Talks' - NDTV",
      "description": "The countrywide truckers' stir has been called off as the government assured that it would consult stakeholders before implementing a contentious law against hit-and-run.",
      "url": "https://www.ndtv.com/india-news/hit-and-run-stir-breakthrough-truckers-body-appeals-for-end-to-protests-4788602",
      "urlToImage": "https://c.ndtvimg.com/2024-01/hq2thv7g_truckers-protest-pti_625x300_01_January_24.jpeg",
      "publishedAt": "2024-01-03T02:17:00Z",
      "content": "New Delhi: The countrywide truckers' stir has been called off as the government assured that it would consult stakeholders before implementing a contentious law against hit-and-run. After long talks … [+1874 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Delhi weather: Temp dips further; cold days, fog to grip city for next 6 days - Mint",
      "description": "Delhi is expected to encounter extreme cold with minimum temperature touching 7 degree Celsius on 3 January. Delhi recorded a minimum temperature of 8.3°C, a notch above the normal on 2 January. For today, mainly clear sky with shallow fog is predicted.",
      "url": "https://www.livemint.com/news/india/delhi-weather-temp-dips-further-cold-days-fog-to-grip-city-for-next-6-days-check-forecast-here-11704245186445.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/01/03/1600x900/delhi_winter_1704245326641_1704245326853.jpg",
      "publishedAt": "2024-01-03T01:56:14Z",
      "content": "Delhi weather news: Cold weather has griped the national capital as Delhi recorded a minimum temperature of 8.3 degrees Celsius, a notch above the normal 2 January. Prior to that on Monday, Delhi rec… [+2525 chars]"
  }
  ];
  constructor(){
    super();
    console.log("hello world");
    this.state={
      articles:this.articles
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Newziee - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 mb-5">
              <News key={element.url} title={element.title} 
              description={element.description}
              imgurl={element.urlToImage}
              newsurl={element.url}/>           
            </div>
          })}
          
          
        </div>

       
      </div>
      
    )
  }
}

export default NewsContainer