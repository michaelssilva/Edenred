<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todos os campos do formulário foram preenchidos
    if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['senha'])) {
        // Conecta ao banco de dados
        $servidor = 'localhost';
        $usuario = 'ticket';
        $senha = 'Fat2023!';
        $bancoDados = 'edenred';
        $database = 'edenred';
        
        $mysqli = new mysqli($host, $usuario, $senha, $database);
        
        if ($mysqli->connect_error) {
            die("Falha ao conectar ao banco de dados: " . $mysqli->connect_error);
        }
        
        // Limpa e sanitiza os dados do formulário para evitar injeção de SQL
        $nome = $mysqli->real_escape_string($_POST['nome']);
        $email = $mysqli->real_escape_string($_POST['email']);
        //Criptografar a senha antes de armazená-la no banco de dados para segurança
        $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
        
        // Prepara a consulta SQL
        $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
        
        // Executa a consulta SQL
        if ($mysqli->query($sql) === TRUE) {
            // Mensagem de sucesso
            echo "Novo usuário cadastrado com sucesso! Redirecionando para a página de login...";
            
            // Redireciona para a página de login após 2 segundos
            header("refresh:2; url=acesso.html");
            exit(); // Termina o script após o redirecionamento
        } else {
            echo "Erro ao cadastrar usuário: " . $mysqli->error;
        }
        
        // Fecha a conexão com o banco de dados
        $mysqli->close();
    } else {
        echo "Todos os campos do formulário devem ser preenchidos.";
    }
} else {
    echo "O formulário não foi enviado corretamente.";
}
?>
