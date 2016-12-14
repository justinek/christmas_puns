import sys, re, string

#f = open("sentences.csv", "r")
f = open(sys.argv[1], "r")
functionWords = open("functionWords.txt", "r")

functionDict = dict()

# puts all the function words in a dictionary
for l in functionWords:
    fw = l.replace("\n", "").split("\t")[0]
    fw = fw.replace(" ", "")
    functionDict[fw.lower()] = 0

#for k, v in functionDict.iteritems():
    #print k,
pair1s = []
pair2s = []

pairID = 1
firstline = 0
for l in f:
    l = l.replace("\n", "")
    if firstline == 0:
        firstline = 1
    else:
        toks = l.split("\t")
        sentenceID = toks[0]
        #phoneticID = toks[1]
        #version = toks[5]
        h1 = toks[3]
        h2 = toks[4]
        sentence = toks[1].lower().replace('"', "") + " " + toks[2].lower().replace('"', "")
        words = sentence.split(" ")
        #print words
        for word in words:
            if "#" not in word:
                word = word.translate(None, '!?.,;:')
                if word not in functionDict.keys() and word is not "":
                    pair1 = h1.upper() + "\t" + word.upper()
		    pair2 = h2.upper() + "\t" + word.upper() 
		    if pair1 not in pair1s:
			    pair1s.append(pair1)
		    if pair2 not in pair2s:
			    pair2s.append(pair2)
		    #print sentenceID + "\t" + str(pairID) + "\t" + "a\t" + h1 + "\t" + word
                    #print sentenceID + "\t" + str(pairID) + "\t" + "b\t" + h2 + "\t" + word
		    #pairID += 1
#print len(pair1s)
#print len(pair2s)
for i in pair1s:
	print str(pairID) + "\t" + i
	pairID += 1
for i in pair2s:
	print str(pairID) + "\t" + i
	pairID += 1

