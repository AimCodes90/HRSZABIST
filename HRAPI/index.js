const express=require('express');
const cors=require('cors');
const pool=require('./db');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
app.get('/',async(req,res)=>{
    try{
    res.json("Welcome to HR API")
    }catch(err){
    res.status(500).json({Error:err.message});
    }
});
app.get('/emp',async(req,res)=>{
    try{
    const result=await pool.query('Select * from employees');
    res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/total',async(req,res)=>{
    try{
        const res1=await pool.query('Select Count(employee_id)  from employees');
        res.json(res1.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/elc40',async(req,res)=>{
    try{
     const res2=await pool.query('select e.first_name,e.last_name,d.department_name,l.postal_code,l.street_address,l.state_province,l.city,c.country_name from employees e inner join departments d on e.department_id=d.department_id inner join locations l on d.location_id=l.location_id inner join countries c on l.country_id=c.country_id limit 5');
     res.json(res2.rows);
    }catch(err){
    res.status(500).json({Error:err.message});
    }
});
app.get('/elc41',async(req,res)=>{
    try{
      const res3= await pool.query('Select e.first_name,e.last_name,e.salary,jh.start_date,jh.end_date from employees e inner join job_history jh on e.employee_id=jh.employee_id limit 5');
      res.json(res3.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/elc42',async(req,res)=>{
    try{
      const res3= await pool.query('SELECT e.employee_id, e.first_name, e.last_name, jh.start_date, jh.end_date, jh.job_id from employees e inner join job_history jh ON jh.employee_id = e.employee_id;');
      res.json(res3.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/elc43',async(req,res)=>{
    try{
      const res3= await pool.query('SELECT e.employee_id, e.first_name, e.last_name, jh.start_date, jh.end_date, jh.job_id, d.department_name from employees e LEFT JOIN job_history jh ON jh.employee_id = e.employee_id INNER JOIN departments d ON e.department_id = d.department_id;'

);
      res.json(res3.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/elc44',async(req,res)=>{
    try{
        const res4=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, jh.start_date, jh.end_date, jh.job_id, d.department_name, l.street_address, l.city from employees e LEFT JOIN job_history jh ON jh.employee_id = e.employee_id INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON d.location_id = l.location_id;')
        res.json(res4.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc46',async(req,res)=>{
    try{
        const res4=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, jh.start_date, jh.end_date, jh.job_id, d.department_name FROM job_history jh INNER JOIN employees e ON e.employee_id = jh.employee_id INNER JOIN departments d ON d.department_id = jh.department_id limit 5;'
        // res.json(res4.rows)
)
        res.json(res4.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc47',async(req,res)=>{
    try{
        const res4=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, jh.start_date, jh.end_date, j.job_title FROM job_history jh INNER JOIN employees e ON e.employee_id = jh.employee_id INNER JOIN jobs j ON j.job_id = jh.job_id limit 5;')
        

        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc48',async(req,res)=>{
    try{
        const res4=await pool.query('SELECT e.first_name, e.last_name, j.job_title, d.department_name FROM job_history jh INNER JOIN employees e ON jh.employee_id = e.employee_id INNER JOIN departments d ON d.department_id = jh.department_id INNER JOIN jobs j ON j.job_id = jh.job_id limit 5;')
        

        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc49',async(req,res)=>{
    try{
        const res4=await pool.query('SELECT e.first_name, e.last_name, j.job_title, l.street_address FROM job_history jh INNER JOIN employees e ON jh.employee_id = e.employee_id INNER JOIN departments d ON d.department_id = jh.department_id INNER JOIN jobs j ON j.job_id = jh.job_id INNER JOIN locations l ON l.location_id = d.location_id limit 5;')
        

        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc50',async(req,res)=>{
    try{
        const res4=await pool.query('SELECT e.first_name, e.last_name, j.job_title, c.country_name FROM job_history jh INNER JOIN employees e ON jh.employee_id = e.employee_id INNER JOIN departments d ON d.department_id = jh.department_id INNER JOIN jobs j ON j.job_id = jh.job_id INNER JOIN locations l ON l.location_id = d.location_id INNER JOIN countries c ON c.country_id = l.country_id limit 8;')
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc51',async(req,res)=>{
    try{
        const res4=await pool.query(
            'SELECT l.street_address, l.city, c.country_name, r.region_name FROM locations l INNER JOIN countries c ON l.country_id = c.country_id INNER JOIN regions r ON r.region_id = c.region_id limit 5;')  

      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc52',async(req,res)=>{
    try{
        const res4=await pool.query(
            'SELECT c.country_name, r.region_name, l.street_address FROM locations l RIGHT JOIN countries c ON c.country_id = l.country_id INNER JOIN regions r ON r.region_id = c.region_id ;'
        )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc53',async(req,res)=>{
    try{
        const res4=await pool.query(
          ' SELECT c.country_name, r.region_name, l.street_address FROM locations l LEFT JOIN countries c ON l.country_id = c.country_id INNER JOIN regions r ON r.region_id = c.region_id limit 5;' )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc54',async(req,res)=>{
    try{
        const res4=await pool.query(
          'SELECT e.first_name, e.last_name, d.department_name, l.city FROM departments d LEFT JOIN employees e ON e.department_id = d.department_id INNER JOIN locations l ON d.location_id = l.location_id limit 5;' )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc55',async(req,res)=>{
    try{
        const res4=await pool.query(
         'SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON l.location_id = d.location_id INNER JOIN countries c ON c.country_id = l.country_id limit 5'

 )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc56',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name as employee_first_name, e.last_name as employee_last_name, m.first_name as manager_first_name, m.last_name as manager_last_name, d.department_name, l.city FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id INNER JOIN departments d ON d.department_id = e.department_id INNER JOIN locations l ON d.location_id = l.location_id limit 5;'

        )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc57',async(req,res)=>{
    try{
        const res4=await pool.query(
       'SELECT e.first_name, e.last_name, j.job_title, d.department_name, l.city from employees e INNER JOIN jobs j ON e.job_id = j.job_id INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON d.location_id = l.location_id limit 5;'

        )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});

app.get('/elc58',async(req,res)=>{
    try{
        const res4=await pool.query(
           ' SELECT e.first_name as employee_first_name, e.last_name as employee_last_name, m.first_name as manager_first_name, m.last_name as manager_last_name, j.job_title, d.department_name FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id INNER JOIN jobs j ON e.job_id = j.job_id INNER JOIN departments d ON e.department_id = d.department_id limit 5;'
 )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc59',async(req,res)=>{
    try{
        const res4=await pool.query(
          'SELECT e.first_name as employee_first_name, e.last_name as employee_last_name, m.first_name as manager_first_name, m.last_name as manager_last_name, j.job_title, d.department_name, l.city FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id INNER JOIN jobs j ON e.job_id = j.job_id INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON d.location_id = l.location_id limit 5;'
 )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc60',async(req,res)=>{
    try{
        const res4=await pool.query(
          'SELECT country_id, country_name, region_id FROM countries WHERE region_id = 1;'
 )
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc61',async(req,res)=>{
    try{
        const res4=await pool.query(
          'SELECT d.department_name, l.city FROM departments d INNER JOIN locations l ON d.location_id = l.location_id WHERE city LIKE N%; ')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc62',async(req,res)=>{
    try{
        const res4=await pool.query(
          'SELECT d.department_name, l.city FROM departments d INNER JOIN locations l ON d.location_id = l.location_id WHERE city LIKE N%; ')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc63',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name as employee_first_name, e.last_name as employee_last_name, m.first_name as manager_first_name, m.last_name as manager_last_name, m.commission_pct as manager_commission_pct FROM employees e INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN employees m ON d.manager_id = m.employee_id WHERE m.commission_pct > 0.15 limit 5;')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc64',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT l.street_address, l.city, c.country_id, r.region_name FROM locations l INNER JOIN countries c ON l.country_id = c.country_id INNER JOIN regions r ON c.region_id = r.region_id WHERE r.region_name LIKE Asia limit 5;')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc65',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT d.department_id, d.department_name FROM departments d INNER JOIN employees e ON d.department_id = e.department_id WHERE e.commission_pct < (SELECT AVG(commission_pct) FROM employees);')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc66',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name, e.last_name, e.salary, j.job_title FROM employees e INNER JOIN jobs j ON e.job_id = j.job_id WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc67',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT employee_id, first_name, last_name FROM employees WHERE department_id IS NULL;')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc68',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name, e.last_name FROM employees e INNER JOIN (SELECT employee_id FROM job_history GROUP BY employee_id HAVING COUNT(employee_id) > 1) jh ON e.employee_id = jh.employee_id;')
      res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc69',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT department_id, COUNT(*) AS employee_count FROM employees GROUP BY department_id; ' )
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc70',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT j.job_id, j.job_title, SUM(e.salary) AS total_salary FROM employees e INNER JOIN jobs j ON e.job_id = j.job_id GROUP BY j.job_id, j.job_title; ' )
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc71',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT d.department_id, d.department_name, AVG(e.commission_pct) AS avg_commission_pct, COUNT(e.employee_id) AS employee_count FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_id, d.department_name; ' )
         res.json(res4.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc72',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT c.country_id, c.country_name, MAX(e.salary) AS max_salary from employees e INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON l.location_id = d.location_id INNER JOIN countries c ON c.country_id = l.country_id GROUP BY c.country_id, c.country_name;' )
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc73',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name, e.last_name, j.job_title, d.department_name, jh.start_date FROM job_history jh INNER JOIN employees e ON e.employee_id = jh.employee_id INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN jobs j ON j.job_id = e.job_id WHERE jh.start_date >= 1993-01-01 AND end_date <= 1997-08-31;' )
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc74',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT c.country_name, l.city, COUNT(d.department_id) AS number_of_departments FROM countries c INNER JOIN locations l ON c.country_id = l.country_id INNER JOIN departments d ON l.location_id = d.location_id INNER JOIN employees e ON d.department_id = e.department_id GROUP BY c.country_name, l.city HAVING COUNT(e.employee_id) >= 2;' )
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc75',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name, e.last_name, j.job_title, jh.start_date, jh.end_date FROM employees e INNER JOIN jobs j ON e.job_id = j.job_id INNER JOIN job_history jh ON j.job_id = jh.job_id WHERE e.commission_pct IS NULL;' )
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc76',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.employee_id, e.first_name, e.last_name, c.country_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON d.location_id = l.location_id INNER JOIN countries c ON c.country_id = l.country_id;')
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc77',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.first_name, e.last_name, e.salary, d.department_id FROM employees e INNER JOIN departments d ON e.department_id = d.department_id WHERE e.salary = (SELECT MIN(salary) FROM employees WHERE department_id = e.department_id);')
        res.json(res4.rows)
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc78',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT * FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;'
)
res.json(res4);
}catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc79',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.employee_id, e.first_name, e.last_name, e.salary FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees) AND e.department_id IN (SELECT department_id FROM employees WHERE first_name LIKE '%J%' OR last_name LIKE '%J%');')
       res.json(res4.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/elc80',async(req,res)=>{
    try{
        const res4=await pool.query(
        'SELECT e.employee_id, e.first_name, e.last_name, j.job_title, l.city FROM employees e INNER JOIN jobs j ON e.job_id = j.job_id INNER JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id WHERE l.city = %Toronto;')
        res.json(res4.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }   
});
app.get('/country',async(req,res)=>{
    try{
    const result=await pool.query('Select * from countries');
    res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
const Port=process.env.PORT;
app.listen(Port,()=>{
    console.log(`Connect successfully to PORT ${Port}`);
});
