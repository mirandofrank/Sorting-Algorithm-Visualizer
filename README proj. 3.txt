CPSC 335-04
3-Sort  due Saturday 12/14 at 11pm

Intro: 
	This project (written in javascript) will visualize a race to sort a 12 character hexadecimal between mergesort, quicksort, and bubblesort. Each algorithm along with each step will be displayed on an html page on a 12-item wide and 20+ rows high table. There will be 3 tables in total on the html page side-to-side. The purpose of this program is to see which one of these algorithms will finish first in sorting the hexadecimal. The one that stops visualizing the steps on the table will be the one that finishes first. 



Algorithm: 
	For this project, bubble sort, merge sort, and quick sort were the three main algorithms implemented which run at a O(N*logN) time complexity. Each algorithm is called by a race manager called "driver" and will each return 0 once they are done sorting the hexadecimal string. 



How to run: 
	In order to run this simulation, make sure sort.html and sort.js are in the same directory and open the html file. 


Contents: 
	-sort.js		//Javascript file
	-sort.html		//html file will open in internet browser 
	-README.txt		//this file 
	-big-o_analysis_p3.doc	//Big-o runtime analysis of algorithm 

External requirements: none

Setup and installation: none, only used html and js edited in a text editor

Sample invocation:  
	The original hexadecimal is displayed in the first rows of each algorithms' tables. Each step will then be visualized row by row until the first one stops, which will indicate the winner. As a sample input of "8A1593479085", mergesort finished first after 4 passes. Quicksort came in next at 8 passes followed by bubblesort which finished at 9 passes. 
	
Features: 
	3 tables and each row will display each pass of the algorithms. 

Bugs: 
	An earlier iteration of our code fell into an infinite loop and deleted the contents of the js file so we had to start over. 