import pandas as pd
def processdata():
    df = pd.read_csv('ISR3.csv', delimiter = ',')
    df = df.to_dict(orient = 'records')
    return df
