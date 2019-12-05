**The Simpsons** first appeared on the television screen in 1989. Today, it is the longest running animates series of all time. 

Over 600 Simpsons episodes in 30 seasons have been realeased over the past 30 years, but over the past decade the series seems to been declining in quality. The ratings and number of viewers have both been decreasing steadily over the years.


Some say it's because of new writers, but here the goal is dig into scripts and the synopsis of each episode in order to see if any patterns can be detected that could help us understand what has happened to the series. 

Throughout this project, we looked at networks for each season of the series in order to detect changes between the years. Each network is comprised of characters that appear in an episode's **synopsis** in the season and links between them. We also analyzed a script for each episode of The Simpsons for seasons 1 through 26, as well as the actual **synopsis** for each episode in order to see how the essence of the show has changed. 

Below, a summary of the elements that this project is comprised of can be found.

---

# 1. Data
In order to create the networks and analyze text related to the series, a lot of data needed to be collected and created. 

The following table explains what datasets were used throughout the project, their attributes, size and how they were obtained. 


| Dataset             | Info                                                                                          | Originally obtained from       |Size|  |
|---------------------|-----------------------------------------------------------------------------------------------|---------------------|----|----------|
| **Episode information** | Each episode's relevant information, such as how many viewers saw the episode, airdate, etc.  | Wikipedia       | 47KB  | [Download](data_to_download/episode_information.csv) |
| **Ratings**             | Each episode's rating                                                                         | IMDB            |  18KB  | [Download](data_to_download/ratings.csv) |
| **Demographic Ratings** | Each episode's rating for different demographics                                              | IMDB            |  77KB  | [Download](data_to_download/demographic_ratings.csv) |
| **Characters**          | Each character that has appeared in The Simpsons                                              | Simpsons.Fandom.com| 21KB | [Download](data_to_download/characters.csv) |
| **Scripts**             | A dataset comprised of the lines that appear in each episode (Seasons 1-26)                   | Data.World      |  36MB  | [Download](data_to_download/script_extended.csv) |
| **Synopsis**            | Each episode's synopsis                                                                       | Simpsons.Fandom.com| 339KB | *Omitted* |

The **Episode Information** dataset was obtained from Wikipedia with web-scraping in order to have an overview of relevant information for all the episodes of the series. This information would later be used in order to connect most of the other datasets obtained together. The dataset holds information about 662 episodes of The Simpsons, all the way back from December 17 1989 to May 12 2019. 

The **Ratings** for each episodes were gotten with the same strategy as the episode information, but now [IMDB's rating site for The Simpsons](https://www.imdb.com/search/title/?series=tt0096697&view=simple&count=250&sort=user_rating,desc&ref_=tt_eps_rhs_sm) was scraped. One rating for each episode was obtained along with the episode's name for all episodes to date. These two datasets (Episode Information and Ratings) were then combined in order to have a larger dataset that held more information. 

From this data we could immediately confirm our beliefs about the decline in quality of the series, as can be seen on the graph below.


<p align="center">
<img src="rating_fall.png" width="675" height="405">
</p>


The **Demographic Ratings** for each episode were obtained in a similar manner that the **Ratings** dataframe was obtained, by scraping *IMDB*. This time, [each episodes rating site](https://www.imdb.com/title/tt0701122/ratings?ref_=tt_ov_rt) was scraped in order to obtain ratings from different age groups for both genders, namely *Males under 18*, *Males between 18 and 29*, *Males between 30 and 44*, *Males over 45*, *Females under 18*, *Females between 18 and 29*, *Females between 30 and 44*, *Females over 45*. Of course this dataset could have been a part of the **Ratings** dataset, but as the idea of scraping for demographic ratings came as the project had already progressed a bit, these dataframes were kept seperate. 

When looking at the distribution of ratings for both genders, it can be seen that males usually tend to rate the series higher than females do, and males give more ratings.

<p align="center">
<img src="dist_ratings_gender.png" width="675" height="405">
</p>

However, as the series has progressed, female ratings have not drastically declined as much as the male ratings. As male give the series a lot more ratings than females do, one could argue that they influence the decline in the ratings much more than females do. 

<p align="center">
<img src="male_groups.png" width="675" height="405">
</p>

<p align="center">
<img src="female_groups.png" width="675" height="405">
</p>

It seems that the series has started to appeal less and less to young males and more and more towards older females, according to these graphs. However, as males rating amounts have dominated the female ones over the years, the series still sees its ratings go down. 

<p align="center">
<img src="gender_amounts.png" width="675" height="405">
</p>


The **Characters** dataframe was obtained from [Simpsons.Fandom](https://simpsons.fandom.com/wiki/Category:Characters) Wiki page. All the names of every character that has appeared in the series was scraped along with their relevant Simpsons.Fandom Wiki link, which was used later in order to determine which characters appear in each episode. A total of 556 distinct characters ended up in the dataframe. 

A lot of cleaning had to be done because some characters were not relevant to our analysis. 

A dataset holding the **Script** for each episode was hard to come by. The dataset that was used was found on [Data.Word](https://data.world/data-society/the-simpsons-by-the-data/workspace/file?filename=simpsons_script_lines.csv). 

In order to obtain the **Synopsis**, [Simpsons.Fandom](https://simpsons.fandom.com/wiki/List_of_Episodes) was again scraped, but this time each episode's page was scraped in order to obtain the synopsis for each and every episode in *HTML* format. As these files are 662 text files, they will be omitted from the downloadable options above. 

An example of a synopsis which was scraped can be seen below: 

`<p>Thanks to a radio talk show host, <a class="mw-redirect" href="/wiki/Mayor_Quimby" title="Mayor Quimby">Mayor Quimby</a> is pressured into releasing <a class="mw-redirect" href="/wiki/Sideshow_Bob" title="Sideshow Bob">Sideshow Bob</a> from prison. Once out, Bob promptly runs against the mayor and wins. <a class="mw-redirect" href="/wiki/Bart" title="Bart">Bart</a> and <a class="mw-redirect" href="/wiki/Lisa" title="Lisa">Lisa</a> set out to prove Mayor Bob did not legally win.
</p>`

The hyperlinks (`<a></a>`) that are in the synopsis denote which characters wikipedia page is in the episode and that is how a character will be to the episode. 


---
# 2. The Networks

A network was created for each season of The Simpsons. A node in the network represents a character that has appeared in a **synopsis** of an episode in the season, and a link between nodes is created if two characters appeared in a synopsis **of the same episode** in the season. 

The size of each node is dependant on **how many times the character appeared in a synopsis** - the more often, the bigger the node and if the character is a main character in an episode within the season, the node gets a *weight boost*. 

The width of each edge is dependant on **how many times two characters appeared together in a synopsis** - the more often, the wider the edge. 

The networks did not seem to change much from season to season, with the largest nodes being **Homer** and **Bart** more often than not. However, when the centrality measures of these networks were analyzed, the importance of the female family members, i.e. **Marge** and **Lisa** seemed to be getting larger and larger as the seasons went by. 

**Limitations**

These networks are created from the synopsis for each episode of a season. These synopsis sometimes create links between characters which do not represent their interaction within the episode, i.e. if there are subplots (A-plot and B-plot) for an episode, those that appear together in the
A-plot (the main plot of the episode) are linked with those that appear in the B-plot (the subplot of an episode) maybe without them actually interacting together in the episode. 

See the work [here](https://audurannaj.github.io/the-simpsons/networks.html)

---

# 3. Wordcloud
General about the wordcloud and then we can make some chapters for different representations


## 3.1 Main Characters 
Dropdownlist to choose which character to look at

---

# 4. Sentimental Analysis

Here the goal is to show how the sentiment score of the seasons have changed through the 30 years of production and put it into perspective with the decreasing ratings and views. Sentimental Analysis aims to measure the happiness in text on a 9-point scale. The higher the score, the more happiness in the text.

In order to rate the sentiment of words, a datafile with 10,222 words and their happiness score was used, see [here](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0026752). The sentiment scores were calculated as the average of sentiment scores for the text considered. If a word did not have a sentiment score it was disregarded from the calculation.

Sentimental Analysis was carried out on the spoken words from the scripts. Here the main findings will be presented.


## 4.1 Developement Through Seasons
The average sentiment score of each seasons spoken lines can be seen in figures below. Even though the change in sentiment score only ranges from 5.42 to 5.47 it can be seen that there is an **upwards trend over the seasons**. 

Looking at how the sentiment score has developed compared to ratings, it can be seen that over the first 9 seasons the ratings are going up while the sentiment score has a downwards trend. This then changes from season 10-15 where the ratings start to drop significanly while the sentiment score grows. Then through seasons 16-26 the sentiment score is pretty steady while the ratings have a small downwards trend. 

The **correlation between the ratings and sentiment score is -0.5** which confirms that there is a negative relationship between the two variables. 

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70244699-379efc00-1775-11ea-9215-34d839feab25.png" width="450" height="270">
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70147218-191d0000-16a4-11ea-8e45-f3a687d7a3d7.png" width="450" height="300">
</p>

These findings hint that there **increasing happiness of the seasons could be a factor in the declinging ratings**, and indicates that the viewers like dark humor.

Another interesting point is that the number of words spoken are decreasing throughout the seasons. When comparing the 1st and the 26th season it can be seen that the **number of words spoken on average in an episode has decresed about 20%**.

<!---
![image](https://user-images.githubusercontent.com/57719216/70218670-b3805080-1743-11ea-8a30-d07d249adefb.png)
--->

## 4.2 Developement of Characters 
Here the top 20 speaking characters were considered and their sentimental scores. Out of the 20 top speaking characters only 3 are females, **Marge**, **Lisa** and **Edna**, so male characters are more visible in the show. The figure below shows the number of words spoken on average in a season and the standard deviation. **The Simpsons family play the the main role in the series**, where **Homer** much more speaks than other characters. 

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70243866-b98e2580-1773-11ea-9e7e-b89ea84aa796.png" width="400" height="350">
</p>

And how does the **number of words spoken develope through the seasons?** The figure below shows how the porportion of the total number of words spoken for each season for the top four characters develope. **Homer** and **Bart** are speaking less as the seasons go by while **Marge** and **Lisa** are speaking more.

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70247002-eabd2480-1778-11ea-8baf-cf72bafeaeea.png" width="500" height="500">
</p>

When looking at the mean and standard deviation of the sentiment scores for the top 20 character it can be seen that there is not a big variation in the mean senitment scores. It is interesting to see how **the characters seem to speek almost equally happy words on average.**

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70243666-50a6ad80-1773-11ea-95b5-7151e22d1c02.png" width="400" height="350">
</p>

Since the Simpsons family play a major role and **speak 68% of the total number of words spoken** we will only present the sentiment analysis for those characters. By fitting a regression to their sentiment scores throughout the seasons it can be seen that they all have an **small upwards trend.** **Homer and Bart have a bigger upwards trend** than **Lisa and Marge but they have a higher sentiment score on average.**


<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70246375-f2c89480-1777-11ea-8220-4d4df439d90b.png" width="500" height="500">
</p>


# 5. Findings
It can be seen that by looking into the synopsis and the scripts there are some changes throughout the seasons that could explain why the ratings and the number of viewers have been declining. The main findings are:

- When looking at the **sentiment scores of spoken words** in the seasons it can be seen that it has a **small upwards trend**. It also has a correlation of -0.48 to the ratings, which tells us that while the sentiment score has been going up the rating have been going down. 
- The number of **words spoken on average per episode in a season has been falling** almost since the start. The average number of words spoken in an episode in season 1 was 1527 vs. 1289 in season 26. 
- When looking at the sentiment scores of each character it can be seen that the members of **the Simpsons family are getting slightly happier** in regards to spoken words. Five of the top 20 speaking characters have a noticable high upwards trend: **Milhouse Can Houten**, **Nelson Muntz**, **Lenny Leonard**, **Carl Carlsson** and **Julius Hibbert**.
- **Merge** and **Lisa** have a higher sentiment score on average than **Homer** and **Bart**.
- **Merge** and **Lisa** are gaining a more important role in the series according to all centrality measures of the network, while the importance of **Homer** and **Bart** is declining. 

The results of the demographic analysis were that **men are the vast majority of the raters** and the main age group that is giving the series ratings is people from 30-44 for both genders. When looking at the ratings in respect to gender it can be seen that the **fall in the ratings is not as big for the female audience as the male audience**. 

This could suggest that the viewers respond better to more sad episodes, where many words are spoken and where **Bart** and **Homer** play a big role. When linking thoses results to the fact that the ratings for women audience have not fallen as much as for the male audience, this hints that women have different prefrences than men in regards to the tv-show.

Even though the findings suggests some factors that could affect the ratings of the Simpsons, **these factors are not likely explain all the decines in ratings**. Even though the spoken words and the synopsis tell alot about the content of the show, the environment, circumstances, how things are said also affect how people relate to the characters and the show.


---


# 5. Webpage Requirements
This part of the assignment is quite free. The main point of the website is to present your idea/analyses to the world in a way that showcases your use of what you've learned in class. It can be as simple as an oldfashioned static web-page, and as complicated as you want it to be. Let your creativity run wild (but keep in mind that this is not a coding class - we care mostly about content and analysis).

The website should be self-contained and tell the story of your dataset without the need for the Explainer Notebook (the purpose of the notebook is to provide additional details for interested readers). Here are some requirements

The page should say clearly what the dataset is and give the reader some idea of its most important properties (kind of Project Assignment A-style).
The page should contain your network and text analysis (that's the main part).
There should be download options for data sets (so the user can play around).
You must link to the Explainer Notebook (more details below) that explains the details of your analysis (including all of the machine learning, the model selection, etc). You can achieve this with a link to an IPython notebook displaying on the nbviewer.
For hosting, I recommend using your DTU website or github pages.




