# have  array of arrays render to dataframe  in pandas


```python
import pandas as pd

# have  array of arrays render to dataframe  in pandas
data = [
    # first means user id
    # second means course id
    # thrid means preference ranking
    [111,  1 , 4],
    [111,  2 , 3],
    [111,  4 , 2],
    [111,  5 , 1],
    [112, 2 , 1],
    [112,  3 , 2],
    [112,  4 , 3],
    [112,  5 , 4],
    [113,  1 , 1],
    [113,  2 , 2],
    [113,  3 , 3],
    [113,  4 , 4],
    [113,  5 , 5],
    [114,  1 , 5],
    [114,  2 , 4],
    [114,  3 , 3],
    [114,  4 , 2],
    [114,  5 , 1],
    [115,  1 , 1],
    [115,  2 , 2],
    [115,  3 , 3],
    [115,  4 , 4],
    [115,  5 , 5]
]

# create a dataframe

# index = course id
# columns = user id
# value = preference ranking

unique_user_id = set([x[0] for x in data])
unique_course_id = set([x[1] for x in data])

df = pd.DataFrame(index=unique_course_id, columns=unique_user_id)

# fill preference ranking to dataframe

for row in data:
    df.loc[row[1], row[0]] = row[2]
    

print(df)

```
