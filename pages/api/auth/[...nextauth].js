import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import AccessFinder from '../../../services/apis/Access';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await AccessFinder.login(credentials);
        if (user.success) {
          return {
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          };
        }
        throw new Error(user.msg);
        // throw new Error('Invalid email or password');
      },
    }),
  ],
});
