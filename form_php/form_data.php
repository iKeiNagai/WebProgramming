<!DOCTYPE html>
<html>
<head>
    <title>Job Application Form</title>
</head>
<body>
    <h1>Job Application Form</h1>
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Process the form data
        $position = $_POST['position'];
        $name = $_POST['name'];
        $gender = $_POST['gender'];
        $nationality = $_POST['nationality'];
        $dob = $_POST['dob'];
        $address = $_POST['address'];
        $phone = $_POST['telephone'];
        $email = $_POST['email'];
        $education = $_POST['education'];
        $yearsExperience = $_POST['yoe'];
        $personalStatement = $_POST['ps'];
        $referee2Name = $_POST['rname'];
        $referee2Occupation = $_POST['roccupation'];
        $referee1Relationship = $_POST['relation'];
        $referee2Address = $_POST['raddress'];
        $referee2Phone = $_POST['rtelephone'];
        $vegetarian = isset($_POST['vegetarian']) ? $_POST['vegetarian'] : 'No';
        $fruits = isset($_POST['fruits']) ? $_POST['fruits'] : [];
        
        // Display the form data using print_r
        echo "<h2>Form Data:</h2>";
        echo "<pre>";
        print_r($_POST);
        echo "</pre>";
    }
    ?>
</body>
</html>