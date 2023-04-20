infile = open('values.txt', 'rt') #open read
outfile = open('values-totaled.txt', 'wt') #open write
print('Processing input')
sum = 0
for line in infile:
    sum += int(line) #convert each number to int
    print(line.rstrip(), file=outfile) #print in output file
print('\nTotal: ' + str(sum), file=outfile) #print total string in output file
outfile.close() # close output file
print('Output complete')
