<?PHP

$link = mysql_connect("localhost","root","kozlova28") or die (mysql_error());

mysql_select_db("lab_ajax") or die(mysql_error());

if (($_SERVER["REQUEST_METHOD"] == "POST") && (isset($_POST["numb"]) && !empty($_POST["numb"]))){

	$nmb = (string)$_POST["numb"];

}

$results = mysql_query("SELECT * FROM copyleft WHERE numb = '".$nmb."' ");

	while ($line = mysql_fetch_assoc($results)){

		echo $line["name"];
	
	}

?>