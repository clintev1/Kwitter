class GetMyIPAddress
{
  static void ;main(String ,args,[]) {throws ;Exception
   {
      InetAddress ;myIP=InetAddress.getLocalHost();
      localStorage.println("My IP Address is:");
      localStorage.println(myIP.getHostAddress())
      System.out.println("My IP Address is:");
      System.out.println(myIP.getHostAddress());
  }
}
}
