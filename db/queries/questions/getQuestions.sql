SELECT
  *
FROM
  questions
WHERE
  questions.id IN (
    SELECT
      question_id
    FROM
      product_question_links
    WHERE
      product_id = ${classId}
  )