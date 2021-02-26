var canv = document.getElementById("background");
var ctx = canv.getContext("2d");
var myArr = ["8","A","1","5","9","3","4","7","9","0","8","5"];
var bArray = myArr.slice(0), mArray = myArr.slice(0), qArray = myArr.slice(0);
var bPasses = 0, mPasses = 0, qPasses = 0, progPasses = 0;
var bEnd = bArray.length;
var bubb = false, merg = false, quik = false;
var driveProg;
var qTop = 1;
var stack = [0, qArray.length - 1];

window.onload = start();

function start()
{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);
    draw("Bubble Sort", 60, 120, 450, 750);
    draw("Merge Sort", 500, 120, 890, 750);
    draw("Quick Sort", 940, 120, 1330, 750);
    
    bubbleVisual();
    mergeVisual();
    quickVisual();
    
    driveProg = setInterval(driver, 500);
    
}

function driver()
{
    if (bubb == true && merg == true && quik == true)
    {
        clearInterval(driveProg);
    }
    else
    {
        if(progPasses % 3 == 0)
        {        
            if (bEnd != 3)
            {
                bubbleSort();
            }
            else if(bEnd == 3)
            {
                bubb = true;
            } 
        }
        
        else if(progPasses % 3 == 1)
        {
            if (mPasses != 5)
            {
                mergeSort();
            }
            else if(mPasses == 5)
            {
                merg = true;
            }
        }
        
        else if(progPasses % 3 == 2)
        {
            if (qTop >= 0)
            {
                quickSort();
            }
            else if (qTop < 0)
            {
                quik = true;
            }
        }
        progPasses++;
    }
}

function draw(text, xStart, yStart, xEnd, yEnd)
{
    for (var i = xStart; i < xEnd; i += 30) //Draw gridlines onto the canvas
    {
        ctx.strokeStyle = "white"; 
        //Drawing vertical gridlines
        ctx.beginPath();
        ctx.moveTo(i, yStart);
        ctx.lineTo(i, yEnd - 30);
        ctx.stroke();
    }
    
    for(var i = yStart; i < yEnd; i += 30)
    {
        //Drawing horizontal gridlines
        ctx.beginPath();
        ctx.moveTo(xStart, i);
        ctx.lineTo(xEnd - 30, i);
        ctx.stroke();
    }
    
    ctx.font = "30px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText(text, xStart, yStart - 30)
}

function convertToHex(arr)
{
    var temp = [];
    for (var i = 0; i < arr.length; i++)
    {
        temp[i] = arr[i].toString(16);
    }
    return temp;
}

function convertToDec(arr)
{
    var temp = [];
    for (var i = 0; i < arr.length; i++)
    {
        temp[i] = parseInt(arr[i], 16);
    }
    return temp;
}

function bubbleVisual()
{
    convertToHex(bArray);
    for (var i = 0; i < bArray.length; i++)
    {
        ctx.font = "20px Courier New";
        ctx.fillStyle = "white";
        ctx.fillText(bArray[i], 70 + (30 * i), 142 + (30 * bPasses))
    }
    bPasses++
    convertToDec(bArray);
}

function mergeVisual()
{
    convertToHex(mArray);
    for (var i = 0; i < mArray.length; i++)
    {
        ctx.font = "20px Courier New";
        ctx.fillStyle = "white";
        ctx.fillText(mArray[i], 510 + (30 * i), 142 + (30 * mPasses))
    }
    mPasses++
    convertToDec(mArray);
}

function quickVisual()
{
    convertToHex(qArray);
    for (var i = 0; i < qArray.length; i++)
    {
        ctx.font = "20px Courier New";
        ctx.fillStyle = "white";
        ctx.fillText(qArray[i], 950 + (30 * i), 142 + (30 * qPasses))
    }
    qPasses++
    convertToDec(qArray);
}

//Used bubble sort from here: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
function bubbleSort()
{
    swapped = false;
    for (var i = 0; i < bEnd; i++)
    {
        if (bArray[i] > bArray[i + 1])
        {
            var temp = bArray[i];
            bArray[i] = bArray[i + 1];
            bArray[i + 1] = temp;
            swapped = true;
        }
    }
    bubbleVisual();
    bEnd--;
}

function merge(left, right)
{
    var temp = [], i = 0, j = 0, t = 0;
    while(left[i] != null || right[j] != null)
    {
        if(right[j] == null)
        {
            temp[t] = left[i];
            i++;
        }
        else if (left[i] <= right[j] && left[i] != null)
        {
            temp[t] = left[i];
            i++;
        }
        else
        {
            temp[t] = right[j];
            j++;
        }
        t++;
    }
    return temp;
}
function mergeSort()
{
    var left = [], right = [], temp = [], temp1 = [];
    if (mPasses == 1)
    {
        for (var i = 0; i < mArray.length; i += 2)
        {
            left = mArray.slice(i, i + 1);
            right = mArray.slice(i + 1, i + 2);
            temp = temp.concat(merge(left, right));
        }
        mArray = temp;
        mergeVisual(); 
    }
    else if(mPasses == 2)
    {
        for (var i = 0; i < mArray.length; i += 4)
        {
            left = mArray.slice(i, i + 2);
            right = mArray.slice(i + 2, i + 4);
            temp = temp.concat(merge(left, right));
        }
        mArray = temp;
        mergeVisual();
    }
    else if(mPasses == 3)
    {
        temp1 = mArray.slice(8, 12);
        left = mArray.slice(0, 4);
        right = mArray.slice(4, 8);
        temp = temp.concat(merge(left, right));
        mArray = temp.concat(temp1)
        mergeVisual();
    }
    else
    {
        temp = mArray.slice(0, 8);
        temp1 = mArray.slice(8, 12);
        mArray = merge(temp, temp1);
        mergeVisual();
    }
}

function swap(i, j)
{
    var t = qArray[i];
    qArray[i] = qArray[j];
    qArray[j] = t;
}

function partition(start, end)
{
    var x = qArray[end];
    var i = (start - 1);
    
    for (var j = start; j <= end - 1; j++)
    {
        if (qArray[j] <= x)
        {
            i++;
            swap(i, j);
        }
    }
    swap(i + 1, end);
    return (i + 1);
}

function quickSort()
{
    var start, end;
    
    var end = stack[qTop--];
    var start = stack[qTop--];
    var p = partition(start, end);

    if (p - 1 > start)
    {
        stack[++qTop] = start;
        stack[++qTop] = p - 1;
    }

    if (p + 1 < end)
    {
        stack[++qTop] = p + 1;
        stack[++qTop] = end;
    }
    quickVisual();
}












