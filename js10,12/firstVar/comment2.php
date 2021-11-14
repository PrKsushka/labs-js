<?PHP

$link = mysql_connect("localhost","root","kozlova28") or die (mysql_error());

mysql_select_db("lab_ajax") or die(mysql_error());

if (($_SERVER["REQUEST_METHOD"] == "GET") && (isset($_GET["img_name"]) && !empty($_GET["img_name"]))){

	$img_name = (string)$_GET["img_name"];

}

$results = mysql_query("SELECT * FROM comments WHERE name = '".$img_name."' ");

	while ($line = mysql_fetch_assoc($results)){

		echo $line["comment"];
	
	}

?>