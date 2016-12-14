import sys, re, string

f = open("wordPairs.txt", "r")

#currentCondition = 0
#firstline = 0

for l in f:
	l = l.strip()
	toks = l.split("\t")
	pairID = toks[0]
	word1 = toks[1]
	word2 = toks[2]
        print '{"uniquePairID":' + str(pairID) + ',"word1":"' + word1 + '","word2":"' + word2 +'"},' 
