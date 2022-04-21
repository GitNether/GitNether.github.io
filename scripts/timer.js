/// copyright 2004 Maurici Carbo Jordi for Math Cats (www.mathcats.com)
/// All rights reserved. This script may not be reproduced. 
/// Questions? Contact Wendy Petti of Math Cats (wpetti@mathcats.com) 
/// Release 01 - Fixed problem about date subtraction - March 2009
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

True_Timecalculator=new Object();

function leapyear(year)
{
if(year%4==0){if ((year%100==0)&&(year%400!=0)){return 0;}else{return 1;}}
return 0;
}

function thousandizator(numbertothousandize, precision)
{
var nudenumber=Math.floor(numbertothousandize);
var numbertail=numbertothousandize-nudenumber;
var nudestring=""+nudenumber;
var nudestringlen=nudestring.length;
var fragmentsstring=Math.floor(nudestringlen/3);
var remainderfragments=nudestringlen%3;
var aditionalline=0;
if (remainderfragments>0){aditionalline=1;}
var matriu=new Object(fragmentsstring+aditionalline);



for(x=0;x<(fragmentsstring+aditionalline);x++)
  {
  if(x==0)
    {
    if (aditionalline==1)
      {
      matriu[x]=nudestring.substr(0,remainderfragments);
      }
    else
      {
      matriu[x]=nudestring.substr(0,3);
      }
    }
  else
    {

    if (remainderfragments==0)
      {
      matriu[x]=nudestring.substr(x*3,3);
      }
    else
      {
      matriu[x]=nudestring.substr((x-1)*3+remainderfragments,3)
      }
    }
  }

var nudestring2="";
for(x=0;x<(fragmentsstring+aditionalline);x++)
  {
  if(x==0)
    {
    nudestring2+=matriu[x];
    }
  else
    {
    nudestring2+=","+matriu[x];
    }
  }

var valuetoreturn=0;
if (precision!=0) {valuetoreturn=""+nudestring2+"."+Math.floor(numbertail*Math.pow(10,precision));} else{valuetoreturn=""+nudestring2;}

return (valuetoreturn);
}

function timecalc(any,mes,dia,hora,minut,segon,concepte)
	{
	this.m_year=any;
	this.m_month=mes;
	this.m_day=dia;
	this.m_hour=hora;
	this.m_minute=minut;
	this.m_second=segon;
	this.m_concept=concepte;
	this.m_IsLeapYear=0;
	this.m_datevalue=0;
	
	
	
	this.p_calculatedatevalue=cdve;
		function cdve()
			{
			this.m_datevalue=0;
			var provmonthlen=0;
			
			if ((this.m_year>=1582)||(this.m_concept==1))
				{		
   			for(x=1582;x<this.m_year;x++)
   				{
   				if(leapyear(x)){this.m_datevalue+=366;}else{this.m_datevalue+=365;}
   				}
   			}
   		else
   			{
				alert(this.m_year+" This year is not valid: 1582 is the oldest year possible under the Gregorian calendar.");   			
        }	
			
			for(x=1;x<this.m_month;x++)
				{
				provmonthlen=0;
				if(x==1){provmonthlen=31;}
				if(x==2)
					{
					if(leapyear(this.m_year)){provmonthlen=29;}else{provmonthlen=28;}
					}
  			if(x==3){provmonthlen=31;}
  			if(x==4){provmonthlen=30;}
  			if(x==5){provmonthlen=31;}
  			if(x==6){provmonthlen=30;}
  			if(x==7){provmonthlen=31;}
  			if(x==8){provmonthlen=31;}
  			if(x==9){provmonthlen=30;}
  			if(x==10){provmonthlen=31;}
  			if(x==11){provmonthlen=30;}
  			if(x==12){provmonthlen=31;}
  			this.m_datevalue+=provmonthlen;
				}
			provmonthlen=0;
			if(this.m_month==1){provmonthlen=31;}
			if(this.m_month==2)
				{
				if(leapyear(this.m_year)){provmonthlen=29;}else{provmonthlen=28;}
				}
			if(this.m_month==3){provmonthlen=31;}
			if(this.m_month==4){provmonthlen=30;}
			if(this.m_month==5){provmonthlen=31;}
			if(this.m_month==6){provmonthlen=30;}
			if(this.m_month==7){provmonthlen=31;}
			if(this.m_month==8){provmonthlen=31;}
			if(this.m_month==9){provmonthlen=30;}
			if(this.m_month==10){provmonthlen=31;}
			if(this.m_month==11){provmonthlen=30;}
			if(this.m_month==12){provmonthlen=31;}
			if(this.m_day<=provmonthlen)
				{
				this.m_datevalue+=(this.m_day-1);
				}
			else
				{
				alert(this.m_day+ " This is not a valid day of the month.");
				}
			this.m_datevalue+=(this.m_hour/24+this.m_minute/1440+this.m_second/86400);
			}

	this.p_actualize=act;
		function act()
			{
			if(this.m_concept==1)
				{
				ara=new Date();
				this.m_year=ara.getFullYear(); 
				this.m_month=ara.getMonth()+1;
				this.m_day=ara.getDate();
				this.m_hour=ara.getHours();
				this.m_minute=ara.getMinutes();
				this.m_second=ara.getSeconds();	
				}
			this.m_IsLeapYear=leapyear(this.m_year);
			this.p_calculatedatevalue();
			};
		
	
	}


/////CONSTRUCTOR DE L'OBJECTE NOMES S'USA UN COP//////////
function timecalculator()
	{
  this.m_timecalcactual=new timecalc(0,0,0,0,0,0,1);
	
	this.m_timecalcrecent=new timecalc(0,0,0,0,0,0,1);
	this.m_timecalcrecent.p_actualize();
	this.m_timecalcold=new timecalc(2000,1,1,0,0,0,0);
	this.m_timecalcold.p_actualize();
	this.m_MainTimer=0;
	this.m_TimeDifference=0;
	this.m_OldTimeDifference=0;
  this.m_years_Dif=0;
  this.m_months_Dif=0;
  this.m_days_Dif=0;
  this.m_window_text="";
  }
/////////////FI DEL CONSTRUCTOR//////////////////

function looking()
	{
	if(True_Timecalculator.m_timecalcrecent.m_concept==1)
		{
   	True_Timecalculator.m_timecalcrecent.p_actualize();
   	True_Timecalculator.m_timecalcold.p_actualize();

		document.timecalc.recentyear.value=True_Timecalculator.m_timecalcrecent.m_year;
		document.timecalc.recentmonth.selectedIndex=True_Timecalculator.m_timecalcrecent.m_month-1;
		document.timecalc.recentday.selectedIndex=True_Timecalculator.m_timecalcrecent.m_day-1;
		document.timecalc.recenthour.selectedIndex=True_Timecalculator.m_timecalcrecent.m_hour;
		document.timecalc.recentminute.selectedIndex=True_Timecalculator.m_timecalcrecent.m_minute;
		document.timecalc.recentsecond.selectedIndex=True_Timecalculator.m_timecalcrecent.m_second;
		document.timecalc.recentyear.style.background="white";
		document.timecalc.recentmonth.style.background="white";
		document.timecalc.recentday.style.background="white";
		document.timecalc.recenthour.style.background="white";
		document.timecalc.recentminute.style.background="white";
		document.timecalc.recentsecond.style.background="white";
		document.timecalc.upperyeardownbutton.disabled=true;
    document.timecalc.recentyear.disabled=true;
		document.timecalc.upperyearupbutton.disabled=true;
    document.timecalc.uppermonthdownbutton.disabled=true;
    document.timecalc.recentmonth.disabled=true;
    document.timecalc.uppermonthupbutton.disabled=true;		
    document.timecalc.upperdaydownbutton.disabled=true;
    document.timecalc.recentday.disabled=true;
    document.timecalc.upperdayupbutton.disabled=true;				
    document.timecalc.upperhourdownbutton.disabled=true;		
    document.timecalc.recenthour.disabled=true;
    document.timecalc.upperhourupbutton.disabled=true;				
    document.timecalc.upperminutedownbutton.disabled=true;				
    document.timecalc.recentminute.disabled=true;
    document.timecalc.upperminuteupbutton.disabled=true;				
    document.timecalc.upperseconddownbutton.disabled=true;				
    document.timecalc.recentsecond.disabled=true;
    document.timecalc.uppersecondupbutton.disabled=true;				    
    }
  else
    {
    True_Timecalculator.m_timecalcactual.p_actualize();
		document.timecalc.upperyeardownbutton.disabled=false;
    document.timecalc.recentyear.disabled=false;
		document.timecalc.upperyearupbutton.disabled=false;
    document.timecalc.uppermonthdownbutton.disabled=false;
    document.timecalc.recentmonth.disabled=false;
    document.timecalc.uppermonthupbutton.disabled=false;		
    document.timecalc.upperdaydownbutton.disabled=false;
    document.timecalc.recentday.disabled=false;
    document.timecalc.upperdayupbutton.disabled=false;				
    document.timecalc.upperhourdownbutton.disabled=false;		
    document.timecalc.recenthour.disabled=false;
    document.timecalc.upperhourupbutton.disabled=false;				
    document.timecalc.upperminutedownbutton.disabled=false;				
    document.timecalc.recentminute.disabled=false;
    document.timecalc.upperminuteupbutton.disabled=false;				
    document.timecalc.upperseconddownbutton.disabled=false;				
    document.timecalc.recentsecond.disabled=false;
    document.timecalc.uppersecondupbutton.disabled=false;				    
    
    if(True_Timecalculator.m_timecalcrecent.m_datevalue>True_Timecalculator.m_timecalcactual.m_datevalue)
  		{
      document.timecalc.recentyear.style.background="#99FF99";
     	document.timecalc.recentmonth.style.background="#99FF99";
	 	  document.timecalc.recentday.style.background="#99FF99";
	    document.timecalc.recenthour.style.background="#99FF99";
	    document.timecalc.recentminute.style.background="#99FF99";
	    document.timecalc.recentsecond.style.background="#99FF99";
      }
    else
      {
      if(True_Timecalculator.m_timecalcrecent.m_datevalue<True_Timecalculator.m_timecalcactual.m_datevalue)
        {
        document.timecalc.recentyear.style.background="#99CC99";
  	   	document.timecalc.recentmonth.style.background="#99CC99";
  		  document.timecalc.recentday.style.background="#99CC99";
  		  document.timecalc.recenthour.style.background="#99CC99";
  		  document.timecalc.recentminute.style.background="#99CC99";
  		  document.timecalc.recentsecond.style.background="#99CC99";
        }
      else
        {
        document.timecalc.recentyear.style.background="white";
	    	document.timecalc.recentmonth.style.background="white";
 	  	  document.timecalc.recentday.style.background="white";
 		    document.timecalc.recenthour.style.background="white";
 		    document.timecalc.recentminute.style.background="white";
 		    document.timecalc.recentsecond.style.background="white";
        }
      }
    }    

	if(True_Timecalculator.m_timecalcold.m_concept==1)
		{
   	True_Timecalculator.m_timecalcrecent.p_actualize();
   	True_Timecalculator.m_timecalcold.p_actualize();
		document.timecalc.oldyear.value=True_Timecalculator.m_timecalcold.m_year;
		document.timecalc.oldmonth.selectedIndex=True_Timecalculator.m_timecalcold.m_month-1;
		document.timecalc.oldday.selectedIndex=True_Timecalculator.m_timecalcold.m_day-1;
		document.timecalc.oldhour.selectedIndex=True_Timecalculator.m_timecalcold.m_hour;
		document.timecalc.oldminute.selectedIndex=True_Timecalculator.m_timecalcold.m_minute;
		document.timecalc.oldsecond.selectedIndex=True_Timecalculator.m_timecalcold.m_second;
		document.timecalc.oldyear.style.background="white";
		document.timecalc.oldmonth.style.background="white";
		document.timecalc.oldday.style.background="white";
		document.timecalc.oldhour.style.background="white";
		document.timecalc.oldminute.style.background="white";
		document.timecalc.oldsecond.style.background="white";
		document.timecalc.downyeardownbutton.disabled=true;
    document.timecalc.oldyear.disabled=true;
		document.timecalc.downyearupbutton.disabled=true;
    document.timecalc.downmonthdownbutton.disabled=true;
    document.timecalc.oldmonth.disabled=true;
		document.timecalc.downmonthupbutton.disabled=true;		
    document.timecalc.downdaydownbutton.disabled=true; 
    document.timecalc.oldday.disabled=true;
		document.timecalc.downdayupbutton.disabled=true;		
    document.timecalc.downhourdownbutton.disabled=true; 		
    document.timecalc.oldhour.disabled=true;
		document.timecalc.downhourupbutton.disabled=true;		
    document.timecalc.downminutedownbutton.disabled=true; 				
    document.timecalc.oldminute.disabled=true;
		document.timecalc.downminuteupbutton.disabled=true;		
    document.timecalc.downseconddownbutton.disabled=true; 				    
    document.timecalc.oldsecond.disabled=true;
		document.timecalc.downsecondupbutton.disabled=true;		
    }
  else
    {
    True_Timecalculator.m_timecalcactual.p_actualize();
		document.timecalc.downyeardownbutton.disabled=false;
    document.timecalc.oldyear.disabled=false;
		document.timecalc.downyearupbutton.disabled=false;
    document.timecalc.downmonthdownbutton.disabled=false;
    document.timecalc.oldmonth.disabled=false;
		document.timecalc.downmonthupbutton.disabled=false;		
    document.timecalc.downdaydownbutton.disabled=false; 
    document.timecalc.oldday.disabled=false;
		document.timecalc.downdayupbutton.disabled=false;		
    document.timecalc.downhourdownbutton.disabled=false; 		
    document.timecalc.oldhour.disabled=false;
		document.timecalc.downhourupbutton.disabled=false;		
    document.timecalc.downminutedownbutton.disabled=false; 				
    document.timecalc.oldminute.disabled=false;
		document.timecalc.downminuteupbutton.disabled=false;		
    document.timecalc.downseconddownbutton.disabled=false; 				    
    document.timecalc.oldsecond.disabled=false;
		document.timecalc.downsecondupbutton.disabled=false;		
    
    if(True_Timecalculator.m_timecalcold.m_datevalue>True_Timecalculator.m_timecalcactual.m_datevalue)
      {
  		document.timecalc.oldyear.style.background="#99FF99";
   		document.timecalc.oldmonth.style.background="#99FF99";
 	   	document.timecalc.oldday.style.background="#99FF99";
 		  document.timecalc.oldhour.style.background="#99FF99";
 		  document.timecalc.oldminute.style.background="#99FF99";
 		  document.timecalc.oldsecond.style.background="#99FF99";
      }
    else
      {
      if(True_Timecalculator.m_timecalcold.m_datevalue<True_Timecalculator.m_timecalcactual.m_datevalue)
        {
        document.timecalc.oldyear.style.background="#99CC99";
  	   	document.timecalc.oldmonth.style.background="#99CC99";
  		  document.timecalc.oldday.style.background="#99CC99";
  		  document.timecalc.oldhour.style.background="#99CC99";
  		  document.timecalc.oldminute.style.background="#99CC99";
  		  document.timecalc.oldsecond.style.background="#99CC99";
        }
      else
        {
        document.timecalc.oldyear.style.background="white";
  	   	document.timecalc.oldmonth.style.background="white";
  		  document.timecalc.oldday.style.background="white";
  		  document.timecalc.oldhour.style.background="white";
  		  document.timecalc.oldminute.style.background="white";
  		  document.timecalc.oldsecond.style.background="white";
        }
      }
    }    

	printresults();

	}

function timesubtraction(newerdate,olderdate)
	{
	var secondsDif=0;
	var minutesDif=0;
	var hoursDif=0;
	var daysDif=0;
	var monthsDif=0;
	var yearsDif=0;
	var enportouna=0;
	
	
	if(newerdate.m_second>=olderdate.m_second)
		{
		secondsDif=newerdate.m_second-olderdate.m_second;
		}
	else
		{
		secondsDif=60+newerdate.m_second-olderdate.m_second;		
		enportouna=1;
		}
	if(newerdate.m_minute>=(olderdate.m_minute+enportouna))
		{
		minutesDif=newerdate.m_minute-(olderdate.m_minute+enportouna);
		enportouna=0;
		}
	else
		{
		minutesDif=60+newerdate.m_minute-(olderdate.m_minute+enportouna);
		enportouna=1;
		}
	if(newerdate.m_hour>=(olderdate.m_hour+enportouna))
		{
		hoursDif=newerdate.m_hour-(olderdate.m_hour+enportouna);
		enportouna=0;
		}
	else
		{
		hoursDif=24+newerdate.m_hour-(olderdate.m_hour+enportouna);
		enportouna=1;		
		}	

	if(newerdate.m_day>=(olderdate.m_day+enportouna))
		{
		daysDif=newerdate.m_day-(olderdate.m_day+enportouna);
		enportouna=0;
		}
	else
////////////////old and mistaken code/////////////////////////////
/*
		{
		var carrymonth=0;
		if(newerdate.m_month==1){carrymonth=31;}
		if(newerdate.m_month==2)
			{
			if(leapyear(newerdate.m_year)){carrymonth=29;}else{carrymonth=28;}
			}
		if(newerdate.m_month==3){carrymonth=31;}
		if(newerdate.m_month==4){carrymonth=30;}
		if(newerdate.m_month==5){carrymonth=31;}
		if(newerdate.m_month==6){carrymonth=30;}
		if(newerdate.m_month==7){carrymonth=31;}
		if(newerdate.m_month==8){carrymonth=31;}
		if(newerdate.m_month==9){carrymonth=30;}
		if(newerdate.m_month==10){carrymonth=31;}
		if(newerdate.m_month==11){carrymonth=30;}
		if(newerdate.m_month==12){carrymonth=31;}
		daysDif=carrymonth+newerdate.m_day-(olderdate.m_day+enportouna);
		enportouna=1;
		}
*/
///////////////end of old and mistaken code/////////////////////////

//////////////new code/////////////////////////////////////////////
//////////Fixed in March 2009//////////////////////////////////////
    {
		var carrymonth=0;
		if(olderdate.m_month==1){carrymonth=31;}
		if(olderdate.m_month==2)
			{
			if(leapyear(olderdate.m_year)){carrymonth=29;}else{carrymonth=28;}
			}
		if(olderdate.m_month==3){carrymonth=31;}
		if(olderdate.m_month==4){carrymonth=30;}
		if(olderdate.m_month==5){carrymonth=31;}
		if(olderdate.m_month==6){carrymonth=30;}
		if(olderdate.m_month==7){carrymonth=31;}
		if(olderdate.m_month==8){carrymonth=31;}
		if(olderdate.m_month==9){carrymonth=30;}
		if(olderdate.m_month==10){carrymonth=31;}
		if(olderdate.m_month==11){carrymonth=30;}
		if(olderdate.m_month==12){carrymonth=31;}
		daysDif=carrymonth+newerdate.m_day-(olderdate.m_day+enportouna);
		enportouna=1;
    }
/////////////end of new code///////////////////////////////////////

	if(newerdate.m_month>=(olderdate.m_month+enportouna))
		{
		monthsDif=newerdate.m_month-(olderdate.m_month+enportouna);
		enportouna=0;
		}	
	else
		{
		monthsDif=12+newerdate.m_month-(olderdate.m_month+enportouna);
		enportouna=1;
		}
		yearsDif=newerdate.m_year-olderdate.m_year-enportouna;
	
	
	True_Timecalculator.m_window_text="\n\n The countdown is: \n\n " ;
	
	if(yearsDif != 1) {True_Timecalculator.m_window_text+=yearsDif+ " years ";} else{True_Timecalculator.m_window_text+=yearsDif+ " year ";} 
	if(monthsDif != 1) {True_Timecalculator.m_window_text+=monthsDif+ " months ";} else{True_Timecalculator.m_window_text+=monthsDif+ " month ";}
	if(daysDif != 1) {True_Timecalculator.m_window_text+=daysDif+ " days ";} else {True_Timecalculator.m_window_text+=daysDif+ " day ";}
	if(hoursDif != 1) {True_Timecalculator.m_window_text+=hoursDif+ " hours ";} else{True_Timecalculator.m_window_text+=hoursDif+ " hour ";}
	if(minutesDif != 1) {True_Timecalculator.m_window_text+=minutesDif+ " minutes ";} else {True_Timecalculator.m_window_text+=minutesDif+ " minute ";}
	if(secondsDif != 1) {True_Timecalculator.m_window_text+=secondsDif+ " seconds ";} else {True_Timecalculator.m_window_text+=secondsDif+ " second ";}
  True_Timecalculator.m_years_Dif=yearsDif;
  True_Timecalculator.m_months_Dif=monthsDif;
  True_Timecalculator.m_days_Dif=daysDif;

	}

/////document.timecalc.resultarea.value=;

function printresults()
	{
//	document.timecalc.resultarea.value+="True_Timecalculator.m_timecalcrecent.m_datevalue"+"\n";
//	document.timecalc.resultarea.value+="\n"+True_Timecalculator.m_timecalcold.m_datevalue;	
	if(True_Timecalculator.m_timecalcrecent.m_datevalue>=True_Timecalculator.m_timecalcold.m_datevalue)
		{
		True_Timecalculator.m_OldTimeDifference=True_Timecalculator.m_TimeDifference;
    True_Timecalculator.m_TimeDifference=True_Timecalculator.m_timecalcrecent.m_datevalue-True_Timecalculator.m_timecalcold.m_datevalue;
    timesubtraction(True_Timecalculator.m_timecalcrecent,True_Timecalculator.m_timecalcold);
		var auxyears=True_Timecalculator.m_years_Dif+True_Timecalculator.m_months_Dif/12+True_Timecalculator.m_days_Dif/365.25;
		var auxmonths=True_Timecalculator.m_years_Dif*12+True_Timecalculator.m_months_Dif+True_Timecalculator.m_days_Dif/31;
		var auxweeks=(True_Timecalculator.m_TimeDifference)/7;
		var auxdays=True_Timecalculator.m_TimeDifference;
		var auxhours=24*(True_Timecalculator.m_TimeDifference)+0.0000001;
		var auxminutes=60*24*(True_Timecalculator.m_TimeDifference)+0.0000001;
		var auxseconds=Math.round(60*60*24*(True_Timecalculator.m_TimeDifference));
    True_Timecalculator.m_window_text+="\n\n     or  "+thousandizator(auxyears,1);	
		if(Math.floor(auxyears)!=1){True_Timecalculator.m_window_text+= " years";}else{True_Timecalculator.m_window_text+= " year";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxmonths,1);	
		if(Math.floor(auxmonths)!=1){True_Timecalculator.m_window_text+= " months";}else{True_Timecalculator.m_window_text+= " month";}
    True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxweeks,1);	
		if(Math.floor(auxweeks)!=1){True_Timecalculator.m_window_text+= " weeks";}else{True_Timecalculator.m_window_text+= " week";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxdays,1);	
		if(Math.floor(auxdays)!=1){True_Timecalculator.m_window_text+= " days";}else{True_Timecalculator.m_window_text+= " day";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxhours,1);	
		if(Math.floor(auxhours)!=1){True_Timecalculator.m_window_text+= " hours";}else{True_Timecalculator.m_window_text+= " hour";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxminutes,1);	
		if(Math.floor(auxminutes)!=1){True_Timecalculator.m_window_text+= " minutes";}else{True_Timecalculator.m_window_text+= " minute";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxseconds,0);	
		if(Math.floor(auxseconds)!=1){True_Timecalculator.m_window_text+= " seconds";}else{True_Timecalculator.m_window_text+= " second";}
  
    if(True_Timecalculator.m_OldTimeDifference>True_Timecalculator.m_TimeDifference)
      {
      document.timecalc.resultarea.value=" countdown to: "+(document.timecalc.recentmonth.selectedIndex+1)+"/"+(document.timecalc.recentday.selectedIndex+1)+"/"+document.timecalc.recentyear.value+" at: "+document.timecalc.recenthour.selectedIndex+" hr "+document.timecalc.recentminute.selectedIndex+" min "+document.timecalc.recentsecond.selectedIndex+" sec ";
      document.timecalc.resultarea.value+="\n from: . . . . . .  "+(document.timecalc.oldmonth.selectedIndex+1)+"/"+(document.timecalc.oldday.selectedIndex+1)+"/"+document.timecalc.oldyear.value+" at: "+document.timecalc.oldhour.selectedIndex+" hr "+document.timecalc.oldminute.selectedIndex+" min "+document.timecalc.oldsecond.selectedIndex+" sec ";      
      document.timecalc.resultarea.value+=True_Timecalculator.m_window_text;
      }
		else
      {
      document.timecalc.resultarea.value=" elapsed time to: "+(document.timecalc.recentmonth.selectedIndex+1)+"/"+(document.timecalc.recentday.selectedIndex+1)+"/"+document.timecalc.recentyear.value+" at: "+document.timecalc.recenthour.selectedIndex+" hr "+document.timecalc.recentminute.selectedIndex+" min "+document.timecalc.recentsecond.selectedIndex+" sec ";
      document.timecalc.resultarea.value+="\n from: . . . . . . . .  "+(document.timecalc.oldmonth.selectedIndex+1)+"/"+(document.timecalc.oldday.selectedIndex+1)+"/"+document.timecalc.oldyear.value+" at: "+document.timecalc.oldhour.selectedIndex+" hr "+document.timecalc.oldminute.selectedIndex+" min "+document.timecalc.oldsecond.selectedIndex+" sec "; 
      document.timecalc.resultarea.value+=True_Timecalculator.m_window_text;
      }
    }
	else
		{
		True_Timecalculator.m_OldTimeDifference=True_Timecalculator.m_TimeDifference;
    True_Timecalculator.m_TimeDifference=True_Timecalculator.m_timecalcold.m_datevalue-True_Timecalculator.m_timecalcrecent.m_datevalue;
    timesubtraction(True_Timecalculator.m_timecalcold,True_Timecalculator.m_timecalcrecent);
		var auxyears=True_Timecalculator.m_years_Dif+True_Timecalculator.m_months_Dif/12+True_Timecalculator.m_days_Dif/365.25;
		var auxmonths=True_Timecalculator.m_years_Dif*12+True_Timecalculator.m_months_Dif+True_Timecalculator.m_days_Dif/31;
		var auxweeks=(True_Timecalculator.m_TimeDifference)/7;
		var auxdays=True_Timecalculator.m_TimeDifference;
		var auxhours=24*(True_Timecalculator.m_TimeDifference+0.0000001);
		var auxminutes=60*24*(True_Timecalculator.m_TimeDifference)+0.0000001;
		var auxseconds=Math.round(60*60*24*(True_Timecalculator.m_TimeDifference));
    True_Timecalculator.m_window_text+="\n\n     or  "+thousandizator(auxyears,1);	
		if(Math.floor(auxyears)!=1){True_Timecalculator.m_window_text+= " years";}else{True_Timecalculator.m_window_text+= " year";}

		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxmonths,1);	
		if(Math.floor(auxmonths)!=1){True_Timecalculator.m_window_text+= " months";}else{True_Timecalculator.m_window_text+=" month";}
    True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxweeks,1);	
		if(Math.floor(auxweeks)!=1){True_Timecalculator.m_window_text+= " weeks";}else{True_Timecalculator.m_window_text+= " week";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxdays,1);	
		if(Math.floor(auxdays)!=1){True_Timecalculator.m_window_text+= " days";}else{True_Timecalculator.m_window_text+= " day";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxhours,1);	
		if(Math.floor(auxhours)!=1){True_Timecalculator.m_window_text+= " hours";}else{True_Timecalculator.m_window_text+= " hour";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxminutes,1);	
		if(Math.floor(auxminutes)!=1){True_Timecalculator.m_window_text+= " minutes";}else{True_Timecalculator.m_window_text+= " minute";}
		True_Timecalculator.m_window_text+="\n     or  "+thousandizator(auxseconds,0);	
		if(Math.floor(auxseconds)!=1){True_Timecalculator.m_window_text+= " seconds";}else{True_Timecalculator.m_window_text+= " second";}
		if(True_Timecalculator.m_OldTimeDifference>True_Timecalculator.m_TimeDifference)
      {
      document.timecalc.resultarea.value=" countdown to: "+(document.timecalc.oldmonth.selectedIndex+1)+"/"+(document.timecalc.oldday.selectedIndex+1)+"/"+document.timecalc.oldyear.value+" at: "+document.timecalc.oldhour.selectedIndex+" hr "+document.timecalc.oldminute.selectedIndex+" min "+document.timecalc.oldsecond.selectedIndex+" sec ";
      document.timecalc.resultarea.value+="\n from: . . . . . .  "+(document.timecalc.recentmonth.selectedIndex+1)+"/"+(document.timecalc.recentday.selectedIndex+1)+"/"+document.timecalc.recentyear.value+" at: "+document.timecalc.recenthour.selectedIndex+" hr "+document.timecalc.recentminute.selectedIndex+" min "+document.timecalc.recentsecond.selectedIndex+" sec ";     
      document.timecalc.resultarea.value+=True_Timecalculator.m_window_text;
      }
		else
		  {
      document.timecalc.resultarea.value=" elapsed time to: "+(document.timecalc.oldmonth.selectedIndex+1)+"/"+(document.timecalc.oldday.selectedIndex+1)+"/"+document.timecalc.oldyear.value+" at: "+document.timecalc.oldhour.selectedIndex+" hr "+document.timecalc.oldminute.selectedIndex+" min "+document.timecalc.oldsecond.selectedIndex+" sec ";
      document.timecalc.resultarea.value+="\n from: . . . . . . . .  "+(document.timecalc.recentmonth.selectedIndex+1)+"/"+(document.timecalc.recentday.selectedIndex+1)+"/"+document.timecalc.recentyear.value+" at: "+document.timecalc.recenthour.selectedIndex+" hr "+document.timecalc.recentminute.selectedIndex+" min "+document.timecalc.recentsecond.selectedIndex+" sec ";     
      document.timecalc.resultarea.value+=True_Timecalculator.m_window_text;
      }
    }
	
	}


function updatecalculator()
	{
	True_Timecalculator.m_timecalcrecent.m_concept=document.timecalc.recentconcept.selectedIndex;
	True_Timecalculator.m_timecalcrecent.m_year=document.timecalc.recentyear.value;
	True_Timecalculator.m_timecalcrecent.m_month=document.timecalc.recentmonth.selectedIndex+1;
	True_Timecalculator.m_timecalcrecent.m_day=document.timecalc.recentday.selectedIndex+1;
	True_Timecalculator.m_timecalcrecent.m_hour=document.timecalc.recenthour.selectedIndex;
	True_Timecalculator.m_timecalcrecent.m_minute=document.timecalc.recentminute.selectedIndex;
	True_Timecalculator.m_timecalcrecent.m_second=document.timecalc.recentsecond.selectedIndex;
	if(True_Timecalculator.m_timecalcrecent.m_year<1582)
		{
		document.timecalc.recentyear.value=1582;
		updatecalculator();
		}
	True_Timecalculator.m_timecalcrecent.p_calculatedatevalue();


	True_Timecalculator.m_timecalcold.m_concept=document.timecalc.oldconcept.selectedIndex;
	True_Timecalculator.m_timecalcold.m_year=document.timecalc.oldyear.value;
	True_Timecalculator.m_timecalcold.m_month=document.timecalc.oldmonth.selectedIndex+1;
	True_Timecalculator.m_timecalcold.m_day=document.timecalc.oldday.selectedIndex+1;
	True_Timecalculator.m_timecalcold.m_hour=document.timecalc.oldhour.selectedIndex;
	True_Timecalculator.m_timecalcold.m_minute=document.timecalc.oldminute.selectedIndex;
	True_Timecalculator.m_timecalcold.m_second=document.timecalc.oldsecond.selectedIndex;
	if(True_Timecalculator.m_timecalcold.m_year<1582)
		{
		document.timecalc.oldyear.value=1582;
		updatecalculator();
		}
	True_Timecalculator.m_timecalcold.p_calculatedatevalue();

	printresults();

//	alert(True_Timecalculator.m_timecalcold.m_year);
	}


function init()
{
True_Timecalculator=new timecalculator(); 
True_Timecalculator.m_MainTimer=setInterval("looking()",1000);
}

onload=init;

/////////////////INTERFACE////////////////////////
function upperyeardown()
{
document.timecalc.recentyear.value--;
if(document.timecalc.recentyear.value<1582) 
  {
  alert("1582 is the first year of the Gregorian calendar.");
  document.timecalc.recentyear.value=1582;
  }
updatecalculator();
}
function upperyearup()
{
document.timecalc.recentyear.value++;
updatecalculator();
}
function loweryeardown()
{
document.timecalc.oldyear.value--;
if(document.timecalc.oldyear.value<1582) 
  {
  alert("1582 is the first year of the Gregorian calendar.");
  document.timecalc.oldyear.value=1582;
  }
updatecalculator();
}
function loweryearup()
{
document.timecalc.oldyear.value++;
updatecalculator();
}

function uppermonthdown()
{
var mnth=document.timecalc.recentmonth.selectedIndex;
if(mnth>0)
  {
  document.timecalc.recentmonth.selectedIndex--;
  }
else
  {
  upperyeardown();
  document.timecalc.recentmonth.selectedIndex=11;
  }
updatecalculator();
}

function uppermonthup()
{
var mnth=document.timecalc.recentmonth.selectedIndex;
if(mnth<11)
  {
  document.timecalc.recentmonth.selectedIndex++;
  }
else
  {
  upperyearup();
  document.timecalc.recentmonth.selectedIndex=0;
  }
updatecalculator();
}

function downmonthdown()
{
var mnth=document.timecalc.oldmonth.selectedIndex;
if(mnth>0)
  {
  document.timecalc.oldmonth.selectedIndex--;
  }
else
  {
  loweryeardown();
  document.timecalc.oldmonth.selectedIndex=11;
  }
updatecalculator();
}

function downmonthup()
{
var mnth=document.timecalc.oldmonth.selectedIndex;
if(mnth<11)
  {
  document.timecalc.oldmonth.selectedIndex++;
  }
else
  {
  loweryearup();
  document.timecalc.oldmonth.selectedIndex=0;
  }
updatecalculator();
}

function upperdaydown()
{
var dy=document.timecalc.recentday.selectedIndex;
if(dy>0)
  {
  document.timecalc.recentday.selectedIndex--;
  }
else
  {
  uppermonthdown();
  var mnth2=document.timecalc.recentmonth.selectedIndex;
  var yr2=document.timecalc.recentyear.value;
	var provmonthlen=0;
	if(mnth2==0){provmonthlen=30;}
	if(mnth2==1)
		{
		if(leapyear(yr2)){provmonthlen=28;}else{provmonthlen=27;}
		}
  if(mnth2==2){provmonthlen=30;}
  if(mnth2==3){provmonthlen=29;}
  if(mnth2==4){provmonthlen=30;}
  if(mnth2==5){provmonthlen=29;}
  if(mnth2==6){provmonthlen=30;}
  if(mnth2==7){provmonthlen=30;}
  if(mnth2==8){provmonthlen=29;}
  if(mnth2==9){provmonthlen=30;}
  if(mnth2==10){provmonthlen=29;}
  if(mnth2==11){provmonthlen=30;}
  document.timecalc.recentday.selectedIndex=provmonthlen;
  }
updatecalculator();
}
function upperdayup()
{
var yr=document.timecalc.recentyear.value;
var mnth=document.timecalc.recentmonth.selectedIndex;
var dy=document.timecalc.recentday.selectedIndex;
if(dy<27)
  {
  document.timecalc.recentday.selectedIndex++;
  }
else
  {
	var provmonthlen=0;
	if(mnth==0){provmonthlen=30;}
	if(mnth==1)
		{
		if(leapyear(yr)){provmonthlen=28;}else{provmonthlen=27;}
		}
  if(mnth==2){provmonthlen=30;}
  if(mnth==3){provmonthlen=29;}
  if(mnth==4){provmonthlen=30;}
  if(mnth==5){provmonthlen=29;}
  if(mnth==6){provmonthlen=30;}
  if(mnth==7){provmonthlen=30;}
  if(mnth==8){provmonthlen=29;}
  if(mnth==9){provmonthlen=30;}
  if(mnth==10){provmonthlen=29;}
  if(mnth==11){provmonthlen=30;}
  if(dy<provmonthlen)
    {
    document.timecalc.recentday.selectedIndex++;  
    }
  else
    {
    document.timecalc.recentday.selectedIndex=0;
    uppermonthup();
    }
  }
updatecalculator();
}
///////////////////////////////////////////////////
function downdaydown()
{
var dy=document.timecalc.oldday.selectedIndex;
if(dy>0)
  {
  document.timecalc.oldday.selectedIndex--;
  }
else
  {
  downmonthdown();
  var mnth2=document.timecalc.oldmonth.selectedIndex;
  var yr2=document.timecalc.oldyear.value;
	var provmonthlen=0;
	if(mnth2==0){provmonthlen=30;}
	if(mnth2==1)
		{
		if(leapyear(yr2)){provmonthlen=28;}else{provmonthlen=27;}
		}
  if(mnth2==2){provmonthlen=30;}
  if(mnth2==3){provmonthlen=29;}
  if(mnth2==4){provmonthlen=30;}
  if(mnth2==5){provmonthlen=29;}
  if(mnth2==6){provmonthlen=30;}
  if(mnth2==7){provmonthlen=30;}
  if(mnth2==8){provmonthlen=29;}
  if(mnth2==9){provmonthlen=30;}
  if(mnth2==10){provmonthlen=29;}
  if(mnth2==11){provmonthlen=30;}
  document.timecalc.oldday.selectedIndex=provmonthlen;
  }
updatecalculator();
}
function downdayup()
{
var yr=document.timecalc.oldyear.value;
var mnth=document.timecalc.oldmonth.selectedIndex;
var dy=document.timecalc.oldday.selectedIndex;
if(dy<27)
  {
  document.timecalc.oldday.selectedIndex++;
  }
else
  {
	var provmonthlen=0;
	if(mnth==0){provmonthlen=30;}
	if(mnth==1)
		{
		if(leapyear(yr)){provmonthlen=28;}else{provmonthlen=27;}
		}
  if(mnth==2){provmonthlen=30;}
  if(mnth==3){provmonthlen=29;}
  if(mnth==4){provmonthlen=30;}
  if(mnth==5){provmonthlen=29;}
  if(mnth==6){provmonthlen=30;}
  if(mnth==7){provmonthlen=30;}
  if(mnth==8){provmonthlen=29;}
  if(mnth==9){provmonthlen=30;}
  if(mnth==10){provmonthlen=29;}
  if(mnth==11){provmonthlen=30;}
  if(dy<provmonthlen)
    {
    document.timecalc.oldday.selectedIndex++;  
    }
  else
    {
    document.timecalc.oldday.selectedIndex=0;
    downmonthup();
    }
  }
updatecalculator();
}
function upperhourdown()
{
var hr=document.timecalc.recenthour.selectedIndex;
if (hr>0)
  {
  document.timecalc.recenthour.selectedIndex--;
  }
else
  {
  upperdaydown();
  document.timecalc.recenthour.selectedIndex=23;
  }
updatecalculator();
}
function upperhourup()
{
var hr=document.timecalc.recenthour.selectedIndex;
if (hr<23)
  {
  document.timecalc.recenthour.selectedIndex++;
  }
else
  {
  upperdayup();
  document.timecalc.recenthour.selectedIndex=0;
  }
updatecalculator();
}
function lowerhourdown()
{
var hr=document.timecalc.oldhour.selectedIndex;
if (hr>0)
  {
  document.timecalc.oldhour.selectedIndex--;
  }
else
  {
  downdaydown();
  document.timecalc.oldhour.selectedIndex=23;
  }
updatecalculator();
}
function lowerhourup()
{
var hr=document.timecalc.oldhour.selectedIndex;
if (hr<23)
  {
  document.timecalc.oldhour.selectedIndex++;
  }
else
  {
  downdayup();
  document.timecalc.oldhour.selectedIndex=0;
  }
updatecalculator();
}

function upperminutedown()
{
var hr=document.timecalc.recentminute.selectedIndex;
if (hr>0)
  {
  document.timecalc.recentminute.selectedIndex--;
  }
else
  {
  upperhourdown();
  document.timecalc.recentminute.selectedIndex=59;
  }
updatecalculator();
}
function upperminuteup()
{
var hr=document.timecalc.recentminute.selectedIndex;
if (hr<59)
  {
  document.timecalc.recentminute.selectedIndex++;
  }
else
  {
  upperhourup();
  document.timecalc.recentminute.selectedIndex=0;
  }
updatecalculator();
}
function lowerminutedown()
{
var hr=document.timecalc.oldminute.selectedIndex;
if (hr>0)
  {
  document.timecalc.oldminute.selectedIndex--;
  }
else
  {
  lowerhourdown();
  document.timecalc.oldminute.selectedIndex=59;
  }
updatecalculator();
}
function lowerminuteup()
{
var hr=document.timecalc.oldminute.selectedIndex;
if (hr<59)
  {
  document.timecalc.oldminute.selectedIndex++;
  }
else
  {
  lowerhourup();
  document.timecalc.oldminute.selectedIndex=0;
  }
updatecalculator();
}
function upperseconddown()
{
var hr=document.timecalc.recentsecond.selectedIndex;
if (hr>0)
  {
  document.timecalc.recentsecond.selectedIndex--;
  }
else
  {
  upperminutedown();
  document.timecalc.recentsecond.selectedIndex=59;
  }
updatecalculator();
}
function uppersecondup()
{
var hr=document.timecalc.recentsecond.selectedIndex;
if (hr<59)
  {
  document.timecalc.recentsecond.selectedIndex++;
  }
else
  {
  upperminuteup();
  document.timecalc.recentsecond.selectedIndex=0;
  }
updatecalculator();
}
function lowerseconddown()
{
var hr=document.timecalc.oldsecond.selectedIndex;
if (hr>0)
  {
  document.timecalc.oldsecond.selectedIndex--;
  }
else
  {
  lowerminutedown();
  document.timecalc.oldsecond.selectedIndex=59;
  }
updatecalculator();
}
function lowersecondup()
{
var hr=document.timecalc.oldsecond.selectedIndex;
if (hr<59)
  {
  document.timecalc.oldsecond.selectedIndex++;
  }
else
  {
  lowerminuteup();
  document.timecalc.oldsecond.selectedIndex=0;
  }
updatecalculator();
}



