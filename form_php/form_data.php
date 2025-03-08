<!DOCTYPE html>
<html>
<head>
    <title>Job Application Form</title>
</head>
<body>
    <h1>Job Application Form (using print_r)</h1>
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

    <h1>Job Application Form (using foreach loop and associative array)</h1>
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Process the form data
        $formFields = array(
        'position' => 'Position Applied For',
        'name' => 'Name',
        'gender' => 'Gender',
        'nationality' => 'Nationality',
        'address' => 'Address',
        'telephone' => 'Telephone Number',
        'email' => 'Email',
        'education' => 'Educational History and Qualifications',
        'yoe' => 'Years of Experience',
        'ps' => 'Personal Statement',
        'rname' => 'Referee Name',
        'roccupation' => 'Referee Occupation',
        'relation' => 'Referee Relationship',
        'raddress' => 'Referee Address',
        'rtelephone' => 'Referee Phone',
        'vegetarian' => 'Vegetarian',
        'fruits' => 'Selected Fruits',
        );
    }
    
    // Display the form data using a foreach loop
    echo "<h2>Form Data:</h2>";
    echo "<ul>";

    foreach ($formFields as $form_field => $label) {
        echo "<li>". $label . " : " . $_POST[$form_field];
    }
    ?>
</body>
</html>