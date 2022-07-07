import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './login.module.scss';
import { Schema as schema } from '../../services/utils/loginValidation';
import Layout from '../../components/Layout';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/about');
    }
  }, [router, session, redirect]);

  const [isError, setIsError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const LoginUser = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        setIsError(result.error);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = (valores) => {
    valores.isUpdated = true;
    LoginUser(valores);
  };

  return (
    <Layout title={'Next Level Partners Login Page'}>
      <section className={styles.section}>
        <article className={styles.card}>
          <div className={styles.msgs}>
            <h1 className={styles.title}>Gracias por volver</h1>
            {isError && (
              <p className="text-red-600 text-center bg-pink-200 font-bold rounded py-2">
                {isError}
              </p>
            )}
          </div>
          <div className={styles.body}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form__field}>
                <label htmlFor="email">Email</label>
                <input
                  {...register('email')}
                  placeholder="usuario@correo.com"
                />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.email?.message}
                </p>
              </div>

              <div className={styles.form__field}>
                <label htmlFor="password">Clave</label>
                <input {...register('password')} placeholder="Clave" />
                <p className="text-red-600 text-sm font-bold">
                  {errors?.password?.message}
                </p>
              </div>

              <button className={styles.button} type="submit">
                Ingresar
              </button>
            </form>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Login;
