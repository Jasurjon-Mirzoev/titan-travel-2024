<?php 
   session_start();

   include("php/config.php");
   if(!isset($_SESSION['valid'])){
    header("Location: login.php");
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <link rel="icon" href="images/LOGO TITAN TRAVEL.PNG" type="image/png">
    <title>Home</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link 
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="style/style.css">
    
</head>
<body>
    <div class="nav">
        <div class="logo">
            <p><a href="home.php">Titan</a> </p>
        </div>

        <div class="right-links">

            <?php 
            
            $id = $_SESSION['id'];
            $query = mysqli_query($con,"SELECT*FROM users WHERE Id=$id");

            while($result = mysqli_fetch_assoc($query)){
                $res_Uname = $result['Username'];
                $res_Email = $result['Email'];
                $res_Age = $result['Age'];
                $res_id = $result['Id'];
            }
            
            echo "<a href='edit.php?Id=$res_id'>Change Profile</a>";
            ?>

            <a href="index.html"> <button class="btn">Home</button> </a>

        </div>
    </div>
    <main>

       <div class="main-box top">
          <div class="top">
            <div class="box">
                <p>Hello <b><?php echo $res_Uname ?></b>, Welcome</p>
            </div>
            <div class="box">
                <p>Your email is <b><?php echo $res_Email ?></b>.</p>
            </div>
          </div>
          <div class="bottom">
            <div class="box">
                <p>Number <b><?php echo $res_Age ?></b>.</p> 
            </div>
          </div>
       </div>

    </main>


    
  



  
 <!--footer section starts-->

 
  
    
      <div class="locatio box">
        <div class="a">
          <a href="Turkey.html">Turkey</a>
          <a href="singapore-Malaysia-Thailand.html">Singapore</a>
          <a href="singapore-Malaysia-Thailand.html">Malaysia</a>
        </div>
        <div class="b">
          <a href="thailand.html">Thailand</a>
          <a href="bali.html">Bali</a>
          <a href="Lampung.html">Lampung</a>
        </div>
        <div class="ca">
          <a href="Yogyakarta.html">Yogyakarta</a>
          <a href="Bangka.html">Bangka</a>
          <a href="">Bromo</a>
        </div>
        
      </div>
  
      <div class="footer">
        <div class="copy">
          <p>&copy; Copy by titan travel 2023</p>
          <br>
          <p><a href="https://www.instagram.com/jasur.mirzoev.75/">Made by Jasur Mirzoev</a></p>
        </div>
      </div>
  
      
  
    </div>
  </section>




    
  
  
  



 <!--footer section end-->




 <div class="fabs" onclick="toggleBtn()">
    <div class="action">
      
      <i class="fas fa-plus" id="add"></i>
      <i class="fas fa-times" id="remove" style="display: none"></i>
    </div>

    <div class="btns">
      <a href="https://www.facebook.com/titan.travel.palembang" class="btn1" style="background: #3b5999"
        ><i class="fab fa-facebook"></i></a>
      <a href="https://www.tiktok.com/@titan.travel.palembang?_t=8ikqzyWq4Fs&_r=1" class="btn1" style="background: #111"
        ><i class="fa-brands fa-tiktok"></i></a> 
      <a href="https://Wa.me/+6285268844491" class="btn1" style="background: #25D366"
        ><i class="fab fa-whatsapp"></i
      ></a>
      <button>
        <a href="https://www.instagram.com/titan.travel/" class="btn1" style="background:#e4405f"
        ><i class="fab fa-instagram"></i
      ></a>
      </button>
      <!-- <button>
        <a href="" class="btn1" style="background: #111;"
        ><i class="fa-x"></i
      ></a>
      </button> -->
    </div>
  </div>
  


  <script>
    function toggleBtn() {
      const Btns = document.querySelector(".btns");
      const add = document.getElementById("add");
      const remove = document.getElementById("remove");
      const btn = document.querySelector(".btns").querySelectorAll("a");
      Btns.classList.toggle("open");
      if (Btns.classList.contains("open")) {
        remove.style.display = "block";
        add.style.display = "none";
        btn.forEach((e, i) => {
          setTimeout(() => {
            bottom = 40 * i;
            e.style.bottom = bottom + "px";
            console.log(e);
          }, 100 * i);
        });
      } else {
        add.style.display = "block";
        remove.style.display = "none";
        btn.forEach((e, i) => {
          e.style.bottom = "0px";
        });
      }
    }
  </script>





  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>



  <script src="script.js"></script>

  
  
 
 <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

</body>

    
    
</body>








</html>