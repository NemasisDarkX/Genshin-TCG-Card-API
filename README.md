<p align=centre>
  
  # Genshin-TCG-Card API   ![vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge&style=for-the-badge&logo=false)
   ![Viewer Count](https://img.shields.io/endpoint?url=https%3A%2F%2Fhits.dwyl.com%2FNemasisDarkX%2FGenshin-TCG-Card-API.json%3Fcolor%3Dpink)
  <p><b>Scrapped Genshin TCG Card API</b></p>
  <p>This file only includes obtainable and unobtainable cards</p>
  <a href="https://genshin-impact.fandom.com/wiki/Character_Card/Gallery"><img src="https://dailymetadose.com/wp-content/uploads/2022/12/genshin-impact-genius-invokation-tcg-all-action-cards-tierlist-cover.jpg" border="0">     </a>
  </br>
  <p>Fork The Repo And Deploy The API On A Server Like</p>
  <p align="center">
  <a href="https://heroku.com/deploy?template=https://github.com/NemasisDarkX/Genshin-TCG-Card-API"><img src="https://img.shields.io/badge/heroku-9d7acc?style=for-the-badge&logo=heroku&logoColor=430098"></a>
    <a href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdatejer%2Fvercel-badge%2Ftree%2Fmaster" rel="nofollow"><img src="https://camo.githubusercontent.com/5e471e99e8e022cf454693e38ec843036ec6301e27ee1e1fa10325b1cb720584/68747470733a2f2f76657263656c2e636f6d2f627574746f6e" repo-name="https://github.com/NemasisDarkX/Genshin-TCG-Card-API" alt="Deploy with Vercel" data-canonical-src="https://vercel.com/button" style="max-width: 100%;"></a>
</p>

#Output

```
 {
"Name":"Shenhe",
"ImgLink":"https://static.wikia.nocookie.net/gensin-impact/images/1/13/Shenhe_Dynamic_Skin.gif/revision/latest?cb=20230719001001"
,"Source":"Genshin Impact"
,"Faction":"Liyue",
"Element":"Cryo"
}
```

<p>And once you get the base url, use:</p>

```bash
 > <base_url>/random
```

```bash
 > <base_url>/random-element/<element_name>
```

```bash
 > <base_url>/character/<character_name>
```


<p>Or You Can Deploy On Terminal</p>
<p>First Clone The Project</p>

```bash
$ git clone https://github.com/NemasisDarkX/Genshin-TCG-Card-API.git
```

<p>To Install The Packages</p>

```bash
$ npm i
```
<p>To Start The API</p>

```bash
$ npm start
```

<p>base url</p>

```bash
 $ http://localhost:3000/
 ```
<p>For Random Card</p>

```bash
$ http://localhost:3000/random
```

<p>For Random Card Based On Element</p>

```bash
$ http://localhost:3000/random-element/<element_name_here>
  ```
<p>For Card Of Specific Character</p>

```bash
$ http://localhost:3000/character/<character_name_here>
```


  <p><b>I do not own the images provided in the json file</b></p>
  
<p><b>If You Find This Helpful Consider Giving This Repo A ⭐ </b></p>
  
