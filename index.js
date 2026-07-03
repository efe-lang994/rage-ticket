<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RAGE MUSIC - Invite</title>
    <style>
        /* Modern ve Karanlık Tema Ayarları */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #0f1115;
            color: #ffffff;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        /* Sağ Üst Köşe Paneli */
        .top-right-panel {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .created-by {
            font-size: 14px;
            color: #a3a3a3;
            font-weight: 500;
            letter-spacing: 0.5px;
        }

        /* Ana Kart Tasarımı */
        .container {
            display: flex;
            align-items: center;
            gap: 40px;
            background: rgba(255, 255, 255, 0.03);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            max-width: 700px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        /* Sol Taraftaki Bot Fotoğrafı */
        .bot-avatar {
            width: 150px;
            height: 150px;
            border-radius: 15px;
            object-fit: cover;
            box-shadow: 0 8px 24px rgba(0,0,0,0.4);
            border: 2px solid rgba(255, 255, 255, 0.1);
        }

        /* Sağ Taraftaki İçerik Alanı */
        .content {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .title {
            font-size: 32px;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.2;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        /* Gri Buton Tasarımı */
        .invite-btn {
            display: inline-block;
            background-color: #4f545c;
            color: #ffffff;
            text-decoration: none;
            padding: 12px 30px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            text-align: center;
            width: fit-content;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .invite-btn:hover {
            background-color: #686d73;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .invite-btn:active {
            transform: translateY(0);
        }

        /* Mobil Cihazlar İçin Uyumluluk */
        @media (max-width: 600px) {
            .container {
                flex-direction: column;
                text-align: center;
                gap: 20px;
                padding: 30px 20px;
            }
            .content {
                align-items: center;
            }
            .title {
                font-size: 26px;
            }
        }
    </style>
</head>
<body>

    <!-- Sağ Üst Panel -->
    <div class="top-right-panel">
        <div class="created-by">Created By RAGE</div>
    </div>

    <!-- Ana Kart -->
    <div class="container">
        <!-- Sol Fotoğraf -->
        <img src="Gemini_Generated_Image_kx28pfkx28pfkx28.png" alt="Bot Avatar" class="bot-avatar">
        
        <!-- Sağ İçerik -->
        <div class="content">
            <h1 class="title">Invite to Your Server!</h1>
            <a href="https://discord.com/oauth2/authorize?client_id=1521576321325469818&permissions=8&integration_type=0&scope=bot+applications.commands" class="invite-btn">INVITE</a>
        </div>
    </div>

</body>
</html>