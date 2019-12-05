**The Simpsons** first appeared on the television screen in 1989. Today, it is the longest running animates series of all time. 

Over 600 Simpsons episodes in 30 seasons have been realeased over the past 30 years, but over the past decade the series seems to been declining in quality. The ratings and number of viewers have both been decreasing steadily over the years.


Some say it's because of new writers, but here the goal is dig into scripts and the synopsis of each episode in order to see if any patterns can be detected that could help us understand what has happened to the series. 

Throughout this project, we looked at networks for each season of the series in order to detect changes between the years. Each network is comprised of characters that appear in an episode's **synopsis** in the season and links between them. We also analyzed a script for each episode of The Simpsons for seasons 1 through 26, as well as the actual **synopsis** for each episode in order to see how the essence of the show has changed. 

Below, a summary of the elements that this project is comprised of can be found.

---

# 1. Data
In order to create the networks and analyze text related to the series, a lot of data needed to be collected and created. 

The following table explains what datasets were used throughout the project, their attributes, size and how they were obtained. 

| Dataset             | Info                                                                                          | Obtained from       |
|---------------------|-----------------------------------------------------------------------------------------------|---------------------|
| **Episode information** | Each episode's relevant information, such as how many viewers saw the episode, airdate, etc.  | Wikipedia           |
| **Ratings**             | Each episode's rating                                                                         | IMDB                |
| **Demographic Ratings** | Each episode's rating for different demographics                                              | IMDB                |
| **Characters**          | Each character that has appeared in The Simpsons                                              | Simpsons.Fandom.com |
| **Scripts**             | A dataset comprised of the lines that appear in each episode (Seasons 1-26)                   | Data.World          |
| **Synopsis**            | Each episode's synopsis                                                                       | Simpsons.Fandom.com |

---
# 2. The Network

A network was created for each season of The Simpsons. A node in the network represents a character that has appeared in a **synopsis** of an
episode in the season, and a link between nodes is created if two characters appeared in a synopsis **of the same episode** in the season. 

The size of each node is dependant on how many times the character appeared in a synopsis - the more often, the bigger the node. 
The width of each edge is dependant on how many times two characters appeared together in a synopsis - the more often, the wider the edge. 

The networks did not seem to change much from season to season, with the largest nodes being **Homer** and **Bart** more often than not. However,
when the centrality measures of these networks were analyzed, the importance of the female family members, i.e. **Marge** and **Lisa** seemed to be getting larger and larger as the seasons went by. This led to more analysis on the ratings and how the ratings were being divided between age groups
and genders. This led to the realization that men's opinion of the series was the reason for the overall rating going down, but women's opinion on the
series hadn't changed as drastically - one age group even had an upwards slope for the average rating over the years. 

Although there exist more ratings from men then women, men under 18 seem rather displeased with the development of the series over the years, as do other male age groups, while this change isn't as drastic with females.

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

Sentimental Analysis was carried out on the scripts and the synopsis. The main findings are presented in the following chapters.



## 4.1 Seasons
The average sentiment score of each seasons spoken lines can be seen in figures below. Even though the change in sentiment score only ranges from 5.42 to 5.47 it can be seen that there is an **upwards trend over the seasons**. Looking at how the sentiment score has developed compared to ratings, it can be seen that over the first 9 seasons the ratings are going up while the sentiment score has a downwards trend. This then changes from season 10-15 where the ratings start to drop significanly while the sentiment score grows. Then through seasons 16-26 the sentiment score is pretty steady while the ratings have a small downwards trend. The **correlation between the ratings and sentiment score is -0.5** which confirms that there is a negative relationship between the two variables. 

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70218670-b3805080-1743-11ea-8a30-d07d249adefb.png" width="700" height="400">
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/57719216/70147218-191d0000-16a4-11ea-8e45-f3a687d7a3d7.png" width="700" height="450">
</p>

These findings hint that there **increasing happiness of the seasons could be a factor in the declinging ratings**, and indicates that the viewers like dark humor.

<!---
![image](https://user-images.githubusercontent.com/57719216/70218670-b3805080-1743-11ea-8a30-d07d249adefb.png)
--->

## 4.2 Seasons

# 5. Findings


---


# 5. Webpage Requirements
This part of the assignment is quite free. The main point of the website is to present your idea/analyses to the world in a way that showcases your use of what you've learned in class. It can be as simple as an oldfashioned static web-page, and as complicated as you want it to be. Let your creativity run wild (but keep in mind that this is not a coding class - we care mostly about content and analysis).

The website should be self-contained and tell the story of your dataset without the need for the Explainer Notebook (the purpose of the notebook is to provide additional details for interested readers). Here are some requirements

The page should say clearly what the dataset is and give the reader some idea of its most important properties (kind of Project Assignment A-style).
The page should contain your network and text analysis (that's the main part).
There should be download options for data sets (so the user can play around).
You must link to the Explainer Notebook (more details below) that explains the details of your analysis (including all of the machine learning, the model selection, etc). You can achieve this with a link to an IPython notebook displaying on the nbviewer.
For hosting, I recommend using your DTU website or github pages.




