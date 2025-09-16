//A DataRow is an array in which each entry is either
//a number, a string, or null
type DataRow = (number | string | null)[];
//A DataSet is an object with two properties: columns and data.
//columns is an array in which each entry is a string
//data is an array in which each entry is a DataRow
interface DataSet {
  columns: string[];
  data: DataRow[];
}

export function subsetData(
  dataSet: DataSet, //first argument dataSet must be a DataSet!
  colsAndValues: {
    //colsAndValues is an object with two properties...
    colidx: number; //properties colidx is a number (interpreted as a column number of a variable in a dataset)
    values: (number | string | null)[]; //values is an array in which each entry is a number, string or null (interpreted as the set of values of the variable at which to subset)
  }[]
): DataSet {
  //returns another DataSet! {
  //Note that in the real world, we'd want to do all kinds of checks to make sure the
  //arguments passed are valid.  But we don't do those in this example

  //subsetted data is what we'll return.
  //It's going to be a Dataset
  const subsettedData: DataSet = {
    columns: [],
    data: [],
  };
  //add the selected columns to the subsetted Data
  colsAndValues.forEach(({ colidx }) => {
    const colNameInData = dataSet.columns[colidx];
    //note that colNameInData will be undefined if colidx is out of range.
    //this is the kind of thing we would want to check for if we were
    //really going to use this function!
    if (colNameInData) {
      subsettedData.columns.push(colNameInData);
    }
  });
  //create the subset..
  dataSet.data.forEach((row) => {
    //at each row in the data...
    //create an array where each entry is value at the requested column in
    //the current row of the data
    const atRequestedColumns = colsAndValues.map(({ colidx }) => row[colidx]);
    //create an array where each entry is the requested value set
    const valueSets = colsAndValues.map(({ values }) => values);
    if (
      atRequestedColumns.every((value, index) =>
        valueSets[index].includes(value)
      )
    ) {
      //if every value in the row is included in the requested value set,
      //add the row to the subsetted Data.
      subsettedData.data.push(atRequestedColumns);
    }
  });
  //the subsettedData is now complete, so return it!
  return subsettedData;
}
