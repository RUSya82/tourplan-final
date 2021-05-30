<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$form_name = $obj['formName'];
if ($form_name == 'feedback-form') {
    $phone = $obj['userphone'];
    $name = $obj['username'];
    $message = $obj['usermessage'];

    $title = "New message from the Tour Plan website from the user $name";
    $body = "
<div>
<h2>$title</h2>
<b>Phone:</b> $phone<br>
<b>Name  :</b> $name<br>
<b>Message:</b> $message<br>";
} else if ($form_name == 'subscribe-form') {
    $email = $obj['useremail'];

// Формирование самого письма
    $title = "New subscribe from the of Tour Plan website";
    $body = "
<div>
<h2>$title</h2>
<b>E-mail:</b> $email<br>";
} else if ('booking-form'){
    $phone = $obj['userphone'];
    $name = $obj['username'];
    $message = $obj['usermessage'];
    $email = $obj['useremail'];
    $title = "New booking request from the Tour Plan website from the user $name";
    $body = "
<div>
<h2>$title</h2>
<b>Phone:</b> $phone<br>
<b>Name  :</b> $name<br>
<b>E-mail:</b> $email<br>
<b>Message:</b> $message<br>";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 2;
    //$mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username = 'im.rusalim.ne@gmail.com'; // Логин на почте
    $mail->Password = 'Enk-Yrs-NKc-ggU'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('im.rusalim.ne@gmail.com', 'Tour plan website - tour-plan.com'); // Адрес самой почты и имя отправителя

    // Получатель письма
//     $mail->addAddress('salexandervl@gmail.com');
    $mail->addAddress('mail-spam2012@yandex.ru');

// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
echo $result;


