select 
  c.name c_name,
  tq.id id_question,
  qo.id question_option_id,
  tq.question,
  top.name option_name
from customer c
left join customerquestion cq on c.id = cq.id_customer
left join templatequestion tq on cq.id_question = tq.id
left join questionoptions qo on cq.id_question = qo.id_question
left join templateoption top on qo.id_option = top.id
order by cq.order