using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Text;  
using System.Net; //Include this namespace  
   
   
namespace IpProto  
{  
    class Program  
    {  
        static void Main(string[] args)  
        {   
            string hostName = Dns.GetHostName(); // Retrive the Name of HOST  
            Console.WriteLine(hostName);  
           // Get the IP  
            string myIP = Dns.GetHostByName(hostName).AddressList[0].ToString();  
            Console.WriteLine("My IP Address is :"+myIP);  
            Console.ReadKey();  
        }  
    }  
}  