<html>
 <form action = "./index.php" method="GET">
  Login - <input name = "login" value = "" size = "20" maxlength = "40"> <p>
  Password - <input type = "password" name = "password" value = "" size = "20" maxlength = "40"> <p>
  <input type = "submit" value = "�����, �� �� ����� ���� - ���"> <p>
 </form>
 <?php
  // echo htmlentities;
  if (isset($_GET["login"])) {
   echo "����� - " . htmlentities($_GET["login"]) . "<br>";
  }
  if (isset($_GET["password"])) {
   echo "����� - " . htmlentities($_GET["password"]) . "<br>";
  }
  
 ?>
</html>