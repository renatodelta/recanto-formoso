<?php
header('Content-Type: application/json');

// Lê o JSON enviado pelo admin.js
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if ($data && isset($data['storeData']) && isset($data['categories']) && isset($data['products'])) {
    
    // Formata o conteúdo para o padrão do data.js
    $content = "const storeData = " . json_encode($data['storeData'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ";\n\n";
    $content .= "const categories = " . json_encode($data['categories'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ";\n\n";
    $content .= "const products = " . json_encode($data['products'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ";\n";
    
    // Salva no arquivo
    $result = file_put_contents('data.js', $content);
    
    if ($result !== false) {
        echo json_encode(["status" => "success", "message" => "Dados salvos com sucesso!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Erro ao salvar o arquivo data.js."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Dados inválidos."]);
}
?>
