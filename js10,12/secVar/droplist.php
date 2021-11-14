<?PHP

$link = mysql_connect("localhost","root","kozlova28") or die (mysql_error());

mysql_select_db("lab_ajax") or die(mysql_error());

$results = mysql_query("SELECT * FROM comments");

	while ($line = mysql_fetch_assoc($results)){

		echo "<option class = 'class-for-14px list-14px' value='".$line["name"]."'>".$line["comment"]."</option>";
	
	}

?>