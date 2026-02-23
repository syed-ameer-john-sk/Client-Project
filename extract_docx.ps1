$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("c:\Project\Client Project\Changes.docx")
$text = $doc.Content.Text
$doc.Close()
$word.Quit()
$text | Out-File -FilePath "c:\Project\Client Project\Changes.txt" -Encoding utf8
